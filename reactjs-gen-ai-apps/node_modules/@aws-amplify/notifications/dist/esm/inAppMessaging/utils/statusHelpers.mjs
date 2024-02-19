import '@aws-amplify/core/internals/utils';
import { assertValidationError } from '../errors/assertValidationError.mjs';
import { InAppMessagingValidationErrorCode } from '../errors/validation.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
let initialized = false;
/**
 * Sets initialization status to true.
 *
 * @internal
 */
const initialize = () => {
    initialized = true;
};
/**
 * Returns the initialization status of In-App Messaging.
 *
 * @internal
 */
const isInitialized = () => initialized;
function assertIsInitialized() {
    assertValidationError(isInitialized(), InAppMessagingValidationErrorCode.NotInitialized);
}

export { assertIsInitialized, initialize, isInitialized };
//# sourceMappingURL=statusHelpers.mjs.map
