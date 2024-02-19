import { RestApiError } from './RestApiError.mjs';
import { validationErrorMap } from './validation.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
function assertValidationError(assertion, name) {
    const { message, recoverySuggestion } = validationErrorMap[name];
    if (!assertion) {
        throw new RestApiError({ name, message, recoverySuggestion });
    }
}

export { assertValidationError };
//# sourceMappingURL=assertValidatonError.mjs.map
