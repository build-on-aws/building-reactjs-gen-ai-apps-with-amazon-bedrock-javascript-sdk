// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import React, { useEffect, useRef, useState } from 'react';
import { isSameMonth } from 'date-fns';
import styles from './styles.css.js';
import CalendarHeader from './header';
import Grid from './grid';
import { normalizeLocale, normalizeStartOfWeek } from '../internal/utils/locale';
import { formatDate, parseDate } from '../internal/utils/date-time';
import { fireNonCancelableEvent } from '../internal/events/index.js';
import checkControlled from '../internal/hooks/check-controlled/index.js';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { getBaseDate } from './utils/navigation';
import { useDateCache } from '../internal/hooks/use-date-cache/index.js';
import { useUniqueId } from '../internal/hooks/use-unique-id/index.js';
import { useInternalI18n } from '../i18n/context.js';
export default function Calendar(_a) {
    var { value, locale = '', startOfWeek, isDateEnabled = () => true, ariaLabel, ariaLabelledby, ariaDescribedby, onChange, __internalRootRef } = _a, rest = __rest(_a, ["value", "locale", "startOfWeek", "isDateEnabled", "ariaLabel", "ariaLabelledby", "ariaDescribedby", "onChange", "__internalRootRef"]);
    checkControlled('Calendar', 'value', value, 'onChange', onChange);
    const baseProps = getBaseProps(rest);
    const normalizedLocale = normalizeLocale('Calendar', locale);
    const normalizedStartOfWeek = normalizeStartOfWeek(startOfWeek, normalizedLocale);
    const gridWrapperRef = useRef(null);
    const [focusedDate, setFocusedDate] = useState(null);
    const valueDateCache = useDateCache();
    const focusedDateCache = useDateCache();
    // Set displayed date to value if defined or to current date otherwise.
    const parsedValue = value && value.length >= 4 ? parseDate(value) : null;
    const memoizedValue = parsedValue ? valueDateCache(parsedValue) : null;
    const defaultDisplayedDate = memoizedValue !== null && memoizedValue !== void 0 ? memoizedValue : new Date();
    const [displayedDate, setDisplayedDate] = useState(defaultDisplayedDate);
    const headingId = useUniqueId('calendar-heading');
    const i18n = useInternalI18n('calendar');
    const nextMonthAriaLabel = i18n('nextMonthAriaLabel', rest.nextMonthAriaLabel);
    const previousMonthAriaLabel = i18n('previousMonthAriaLabel', rest.previousMonthAriaLabel);
    const todayAriaLabel = i18n('todayAriaLabel', rest.todayAriaLabel);
    // Update displayed date if value changes.
    useEffect(() => {
        memoizedValue && setDisplayedDate(prev => (prev.getTime() !== memoizedValue.getTime() ? memoizedValue : prev));
    }, [memoizedValue]);
    const selectFocusedDate = (selected, baseDate) => {
        if (selected && isDateEnabled(selected) && isSameMonth(selected, baseDate)) {
            return selected;
        }
        const today = new Date();
        if (isDateEnabled(today) && isSameMonth(today, baseDate)) {
            return today;
        }
        if (isDateEnabled(baseDate)) {
            return baseDate;
        }
        return null;
    };
    const baseDate = getBaseDate(displayedDate, isDateEnabled);
    const focusableDate = focusedDate || selectFocusedDate(memoizedValue, baseDate);
    const onHeaderChangeMonthHandler = (date) => {
        setDisplayedDate(date);
        setFocusedDate(null);
    };
    const onGridChangeMonthHandler = (newMonth) => {
        setDisplayedDate(newMonth);
        setFocusedDate(null);
    };
    const onGridFocusDateHandler = (date) => {
        if (date) {
            setFocusedDate(date ? focusedDateCache(date) : null);
        }
    };
    const onGridSelectDateHandler = (date) => {
        fireNonCancelableEvent(onChange, { value: formatDate(date) });
        setFocusedDate(null);
    };
    const onGridBlur = (event) => {
        var _a;
        const newFocusTargetIsInGrid = event.relatedTarget && ((_a = gridWrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.relatedTarget));
        if (!newFocusTargetIsInGrid) {
            setFocusedDate(null);
        }
    };
    return (React.createElement("div", Object.assign({ ref: __internalRootRef }, baseProps, { role: "group", "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, className: clsx(styles.root, styles.calendar, baseProps.className) }),
        React.createElement("div", { className: styles['calendar-inner'] },
            React.createElement(CalendarHeader, { baseDate: baseDate, locale: normalizedLocale, onChangeMonth: onHeaderChangeMonthHandler, previousMonthLabel: previousMonthAriaLabel, nextMonthLabel: nextMonthAriaLabel, headingId: headingId }),
            React.createElement("div", { onBlur: onGridBlur, ref: gridWrapperRef },
                React.createElement(Grid, { locale: normalizedLocale, baseDate: baseDate, isDateEnabled: isDateEnabled, focusedDate: focusedDate, focusableDate: focusableDate, onSelectDate: onGridSelectDateHandler, onFocusDate: onGridFocusDateHandler, onChangeMonth: onGridChangeMonthHandler, startOfWeek: normalizedStartOfWeek, todayAriaLabel: todayAriaLabel, selectedDate: memoizedValue, ariaLabelledby: headingId })))));
}
//# sourceMappingURL=internal.js.map