import { validationErrorMap } from '../../common/AuthErrorStrings.mjs';
import { AuthError } from '../AuthError.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function assertValidationError(assertion, name) {
    const { message, recoverySuggestion } = validationErrorMap[name];
    if (!assertion) {
        throw new AuthError({ name, message, recoverySuggestion });
    }
}

export { assertValidationError };
//# sourceMappingURL=assertValidationError.mjs.map
