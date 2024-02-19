// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo, useRef } from 'react';
import styles from '../styles.css.js';
import { KeyCode } from '../../internal/keycode';
import { isSameDay, isSameMonth } from 'date-fns';
import { getCalendarMonth } from 'mnth';
import { getDateLabel, renderDayName } from '../utils/intl';
import clsx from 'clsx';
import { useEffectOnUpdate } from '../../internal/hooks/use-effect-on-update.js';
import ScreenreaderOnly from '../../internal/components/screenreader-only/index.js';
import { moveNextDay, movePrevDay, moveNextWeek, movePrevWeek } from '../utils/navigation';
export default function Grid({ locale, baseDate, isDateEnabled, focusedDate, focusableDate, onSelectDate, onFocusDate, onChangeMonth, startOfWeek, todayAriaLabel, selectedDate, ariaLabelledby, }) {
    const focusedDateRef = useRef(null);
    const onGridKeyDownHandler = (event) => {
        let updatedFocusDate;
        if (focusableDate === null) {
            return;
        }
        switch (event.keyCode) {
            case KeyCode.space:
            case KeyCode.enter:
                event.preventDefault();
                if (focusableDate) {
                    onFocusDate(null);
                    onSelectDate(focusableDate);
                }
                return;
            case KeyCode.right:
                event.preventDefault();
                updatedFocusDate = moveNextDay(focusableDate, isDateEnabled);
                break;
            case KeyCode.left:
                event.preventDefault();
                updatedFocusDate = movePrevDay(focusableDate, isDateEnabled);
                break;
            case KeyCode.up:
                event.preventDefault();
                updatedFocusDate = movePrevWeek(focusableDate, isDateEnabled);
                break;
            case KeyCode.down:
                event.preventDefault();
                updatedFocusDate = moveNextWeek(focusableDate, isDateEnabled);
                break;
            default:
                return;
        }
        if (!isSameMonth(updatedFocusDate, baseDate)) {
            onChangeMonth(updatedFocusDate);
        }
        onFocusDate(updatedFocusDate);
    };
    // The focused date changes as a feedback to keyboard navigation in the grid.
    // Once changed, the corresponding day button needs to receive the actual focus.
    useEffectOnUpdate(() => {
        if (focusedDate && focusedDateRef.current) {
            focusedDateRef.current.focus();
        }
    }, [focusedDate]);
    const weeks = useMemo(() => getCalendarMonth(baseDate, { firstDayOfWeek: startOfWeek }), [baseDate, startOfWeek]);
    const weekdays = weeks[0].map(date => date.getDay());
    return (React.createElement("table", { role: "grid", className: styles['calendar-grid'], "aria-labelledby": ariaLabelledby },
        React.createElement("thead", null,
            React.createElement("tr", null, weekdays.map(dayIndex => (React.createElement("th", { key: dayIndex, scope: "col", className: clsx(styles['calendar-grid-cell'], styles['calendar-day-header']) },
                React.createElement("span", { "aria-hidden": "true" }, renderDayName(locale, dayIndex, 'short')),
                React.createElement(ScreenreaderOnly, null, renderDayName(locale, dayIndex, 'long'))))))),
        React.createElement("tbody", { onKeyDown: onGridKeyDownHandler }, weeks.map((week, weekIndex) => (React.createElement("tr", { key: weekIndex, className: styles['calendar-week'] }, week.map((date, dateIndex) => {
            const isFocusable = !!focusableDate && isSameDay(date, focusableDate);
            const isSelected = !!selectedDate && isSameDay(date, selectedDate);
            const isEnabled = !isDateEnabled || isDateEnabled(date);
            const isDateOnSameDay = isSameDay(date, new Date());
            // Can't be focused.
            let tabIndex = undefined;
            if (isFocusable && isEnabled) {
                // Next focus target.
                tabIndex = 0;
            }
            else if (isEnabled) {
                // Can be focused programmatically.
                tabIndex = -1;
            }
            // Screen-reader announcement for the focused day.
            let dayAnnouncement = getDateLabel(locale, date, 'short');
            if (isDateOnSameDay) {
                dayAnnouncement += '. ' + todayAriaLabel;
            }
            return (React.createElement("td", { key: `${weekIndex}:${dateIndex}`, ref: tabIndex === 0 ? focusedDateRef : undefined, tabIndex: tabIndex, "aria-current": isDateOnSameDay ? 'date' : undefined, "aria-selected": isEnabled ? isSelected : undefined, "aria-disabled": !isEnabled, 
                // Do not attach click event when the date is disabled, otherwise VO+safari announces clickable
                onClick: isEnabled ? () => onSelectDate(date) : undefined, className: clsx(styles['calendar-grid-cell'], styles['calendar-day'], {
                    [styles['calendar-day-current-month']]: isSameMonth(date, baseDate),
                    [styles['calendar-day-enabled']]: isEnabled,
                    [styles['calendar-day-selected']]: isSelected,
                    [styles['calendar-day-today']]: isDateOnSameDay,
                }) },
                React.createElement("span", { className: styles['day-inner'], "aria-hidden": "true" }, date.getDate()),
                React.createElement(ScreenreaderOnly, null, dayAnnouncement)));
        })))))));
}
//# sourceMappingURL=index.js.map