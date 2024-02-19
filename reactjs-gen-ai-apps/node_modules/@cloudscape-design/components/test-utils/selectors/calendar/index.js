"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../calendar/styles.selectors.js");
const button_1 = require("../button");
class CalendarWrapper extends selectors_1.ComponentWrapper {
    /**
     * Returns a day container on the calendar.
     *
     * @param row 1-based row index of the day.
     * @param column 1-based column index of the day.
     */
    findDateAt(row, column) {
        return this.find(`.${styles_selectors_js_1.default['calendar-week']}:nth-child(${row}) .${styles_selectors_js_1.default['calendar-day']}:nth-child(${column})`);
    }
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default['calendar-header']);
    }
    findPreviousMonthButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['calendar-prev-month-btn']}`, button_1.default);
    }
    findNextMonthButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['calendar-next-month-btn']}`, button_1.default);
    }
    findSelectedDate() {
        return this.find(`.${styles_selectors_js_1.default['calendar-day-selected']}`);
    }
}
exports.default = CalendarWrapper;
CalendarWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map