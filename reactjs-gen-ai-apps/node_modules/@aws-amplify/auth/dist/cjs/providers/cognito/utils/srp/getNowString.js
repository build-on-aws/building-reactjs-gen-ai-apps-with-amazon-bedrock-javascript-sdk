'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNowString = void 0;
const MONTH_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const WEEK_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const getNowString = () => {
    const now = new Date();
    const weekDay = WEEK_NAMES[now.getUTCDay()];
    const month = MONTH_NAMES[now.getUTCMonth()];
    const day = now.getUTCDate();
    let hours = now.getUTCHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = now.getUTCMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let seconds = now.getUTCSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    const year = now.getUTCFullYear();
    // ddd MMM D HH:mm:ss UTC YYYY
    const dateNow = `${weekDay} ${month} ${day} ${hours}:${minutes}:${seconds} UTC ${year}`;
    return dateNow;
};
exports.getNowString = getNowString;
//# sourceMappingURL=getNowString.js.map
