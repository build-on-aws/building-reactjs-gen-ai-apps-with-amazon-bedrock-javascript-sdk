import { currentSizeKey } from '../constants.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
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
/**
 * get current time
 */
function getCurrentTime() {
    const currentTime = new Date();
    return currentTime.getTime();
}
/**
 * check if passed value is an integer
 */
function isInteger(value) {
    if (Number.isInteger) {
        return Number.isInteger(value);
    }
    return (typeof value === 'number' && isFinite(value) && Math.floor(value) === value);
}
const getCurrentSizeKey = (keyPrefix) => `${keyPrefix}${currentSizeKey}`;

export { getByteLength, getCurrentSizeKey, getCurrentTime, isInteger };
//# sourceMappingURL=cacheHelpers.mjs.map
