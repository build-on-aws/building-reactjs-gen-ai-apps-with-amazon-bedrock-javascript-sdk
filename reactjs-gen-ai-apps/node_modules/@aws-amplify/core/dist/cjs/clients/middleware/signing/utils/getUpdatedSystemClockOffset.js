'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdatedSystemClockOffset = void 0;
const isClockSkewed_1 = require("./isClockSkewed");
/**
 * Returns the difference between clock time and the current system time if clock is skewed.
 *
 * @param clockTimeInMilliseconds Clock time in milliseconds.
 * @param currentSystemClockOffset Current system clock offset in milliseconds.
 *
 * @internal
 */
const getUpdatedSystemClockOffset = (clockTimeInMilliseconds, currentSystemClockOffset) => {
    if ((0, isClockSkewed_1.isClockSkewed)(clockTimeInMilliseconds, currentSystemClockOffset)) {
        return clockTimeInMilliseconds - Date.now();
    }
    return currentSystemClockOffset;
};
exports.getUpdatedSystemClockOffset = getUpdatedSystemClockOffset;
//# sourceMappingURL=getUpdatedSystemClockOffset.js.map
