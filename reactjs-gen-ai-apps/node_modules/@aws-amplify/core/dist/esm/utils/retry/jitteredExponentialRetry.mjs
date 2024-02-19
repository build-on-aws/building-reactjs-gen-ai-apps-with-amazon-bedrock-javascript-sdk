import { MAX_DELAY_MS } from './constants.mjs';
import { jitteredBackoff } from './jitteredBackoff.mjs';
import { retry } from './retry.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @private
 * Internal use of Amplify only
 */
const jitteredExponentialRetry = (functionToRetry, args, maxDelayMs = MAX_DELAY_MS, onTerminate) => retry(functionToRetry, args, jitteredBackoff(maxDelayMs), onTerminate);

export { jitteredExponentialRetry };
//# sourceMappingURL=jitteredExponentialRetry.mjs.map
