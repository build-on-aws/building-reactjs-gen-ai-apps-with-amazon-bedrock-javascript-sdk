'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.jitteredBackoff = void 0;
const constants_1 = require("./constants");
/**
 * @private
 * Internal use of Amplify only
 */
function jitteredBackoff(maxDelayMs = constants_1.MAX_DELAY_MS) {
    const BASE_TIME_MS = 100;
    const JITTER_FACTOR = 100;
    return attempt => {
        const delay = 2 ** attempt * BASE_TIME_MS + JITTER_FACTOR * Math.random();
        return delay > maxDelayMs ? false : delay;
    };
}
exports.jitteredBackoff = jitteredBackoff;
//# sourceMappingURL=jitteredBackoff.js.map
