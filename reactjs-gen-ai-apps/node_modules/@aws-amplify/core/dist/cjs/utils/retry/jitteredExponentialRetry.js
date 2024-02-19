'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.jitteredExponentialRetry = void 0;
const constants_1 = require("./constants");
const jitteredBackoff_1 = require("./jitteredBackoff");
const retry_1 = require("./retry");
/**
 * @private
 * Internal use of Amplify only
 */
const jitteredExponentialRetry = (functionToRetry, args, maxDelayMs = constants_1.MAX_DELAY_MS, onTerminate) => (0, retry_1.retry)(functionToRetry, args, (0, jitteredBackoff_1.jitteredBackoff)(maxDelayMs), onTerminate);
exports.jitteredExponentialRetry = jitteredExponentialRetry;
//# sourceMappingURL=jitteredExponentialRetry.js.map
