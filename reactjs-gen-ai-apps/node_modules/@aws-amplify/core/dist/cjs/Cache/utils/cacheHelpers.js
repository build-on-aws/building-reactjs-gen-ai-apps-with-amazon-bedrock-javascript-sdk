'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentSizeKey = exports.isInteger = exports.getCurrentTime = exports.getByteLength = void 0;
const constants_1 = require("../constants");
/**
 * return the byte size of the string
 * @param str
 */
function getByteLength(str) {
    let ret = 0;
    ret = str.length;
    for (let i = str.length; i >= 0; i -= 1) {
        const charCode = str.charCodeAt(i);
        if (charCode > 0x7f && charCode <= 0x7ff) {
            ret += 1;
        }
        else if (charCode > 0x7ff && charCode <= 0xffff) {
            ret += 2;
        }
        // trail surrogate
        if (charCode >= 0xdc00 && charCode <= 0xdfff) {
            i -= 1;
        }
    }
    return ret;
}
exports.getByteLength = getByteLength;
/**
 * get current time
 */
function getCurrentTime() {
    const currentTime = new Date();
    return currentTime.getTime();
}
exports.getCurrentTime = getCurrentTime;
/**
 * check if passed value is an integer
 */
function isInteger(value) {
    if (Number.isInteger) {
        return Number.isInteger(value);
    }
    return (typeof value === 'number' && isFinite(value) && Math.floor(value) === value);
}
exports.isInteger = isInteger;
const getCurrentSizeKey = (keyPrefix) => `${keyPrefix}${constants_1.currentSizeKey}`;
exports.getCurrentSizeKey = getCurrentSizeKey;
//# sourceMappingURL=cacheHelpers.js.map
