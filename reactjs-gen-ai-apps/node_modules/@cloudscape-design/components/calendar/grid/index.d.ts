/// <reference types="react" />
import { DayIndex } from '../internal';
import { DatePickerProps } from '../../date-picker/interfaces';
/**
 * Calendar grid supports two mechanisms of keyboard navigation:
 * - Native screen-reader table navigation (semantic table markup);
 * - Keyboard arrow-keys navigation (a custom key-down handler).
 *
 * The implementation largely follows the w3 example (https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog) and shares the following issues:
 * - (table navigation) Chrome+VO - weekday is announced twice when navigating to the calendar's header;
 * - (table navigation) Safari+VO - "dimmed" state is announced twice;
 * - (table navigation) Firefox/Chrome+NVDA - cannot use table navigation if any cell has a focus;
 * - (keyboard navigation) Firefox+NVDA - every day is announced as "not selected";
 * - (keyboard navigation) Safari/Chrome+VO - weekdays are not announced;
 * - (keyboard navigation) Safari/Chrome+VO - days are not announced as interactive (clickable or selectable);
 * - (keyboard navigation) Safari/Chrome+VO - day announcements are not interruptive and can be missed if navigating fast.
 */
export interface GridProps {
    locale: string;
    baseDate: Date;
    isDateEnabled: DatePickerProps.IsDateEnabledFunction;
    focusedDate: Date | null;
    focusableDate: Date | null;
    onSelectDate: (date: Date) => void;
    onFocusDate: (date: null | Date) => void;
    onChangeMonth: (date: Date) => void;
    startOfWeek: DayIndex;
    todayAriaLabel?: string;
    selectedDate: Date | null;
    ariaLabelledby: string;
}
export default function Grid({ locale, baseDate, isDateEnabled, focusedDate, focusableDate, onSelectDate, onFocusDate, onChangeMonth, startOfWeek, todayAriaLabel, selectedDate, ariaLabelledby, }: GridProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map