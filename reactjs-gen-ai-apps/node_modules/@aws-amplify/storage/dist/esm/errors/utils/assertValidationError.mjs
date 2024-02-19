import { validationErrorMap } from '../types/validation.mjs';
import { StorageError } from '../StorageError.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function assertValidationError(assertion, name) {
    const { message, recoverySuggestion } = validationErrorMap[name];
    if (!assertion) {
        throw new StorageError({ name, message, recoverySuggestion });
    }
}

export { assertValidationError };
//# sourceMappingURL=assertValidationError.mjs.map
