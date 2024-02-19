import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
export default class CalendarWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Returns a day container on the calendar.
     *
     * @param row 1-based row index of the day.
     * @param column 1-based column index of the day.
     */
    findDateAt(row: number, column: number): ElementWrapper;
    findHeader(): ElementWrapper;
    findPreviousMonthButton(): ButtonWrapper;
    findNextMonthButton(): ButtonWrapper;
    findSelectedDate(): ElementWrapper;
}
