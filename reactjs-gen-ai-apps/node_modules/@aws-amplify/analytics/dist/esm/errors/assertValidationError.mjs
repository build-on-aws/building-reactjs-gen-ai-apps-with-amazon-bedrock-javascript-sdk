import { AnalyticsError } from './AnalyticsError.mjs';
import { validationErrorMap } from './validation.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
function assertValidationError(assertion, name, message) {
    const { message: defaultMessage, recoverySuggestion } = validationErrorMap[name];
    if (!assertion) {
        throw new AnalyticsError({
            name,
            message: message ?? defaultMessage,
            recoverySuggestion,
        });
    }
}

export { assertValidationError };
//# sourceMappingURL=assertValidationError.mjs.map
