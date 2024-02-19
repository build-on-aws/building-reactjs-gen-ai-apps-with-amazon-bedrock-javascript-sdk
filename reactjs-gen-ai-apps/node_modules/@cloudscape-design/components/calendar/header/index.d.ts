/// <reference types="react" />
interface CalendarHeaderProps {
    baseDate: Date;
    locale: string;
    onChangeMonth: (date: Date) => void;
    previousMonthLabel?: string;
    nextMonthLabel?: string;
    headingId: string;
}
declare const CalendarHeader: ({ baseDate, locale, onChangeMonth, previousMonthLabel, nextMonthLabel, headingId, }: CalendarHeaderProps) => JSX.Element;
export default CalendarHeader;
//# sourceMappingURL=index.d.ts.map