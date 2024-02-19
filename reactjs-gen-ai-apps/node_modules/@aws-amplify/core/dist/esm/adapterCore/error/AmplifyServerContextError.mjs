import { AmplifyError } from '../../errors/AmplifyError.mjs';
import '../../types/errors.mjs';
import '../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class AmplifyServerContextError extends AmplifyError {
    constructor({ message, recoverySuggestion, underlyingError, }) {
        super({
            name: 'AmplifyServerContextError',
            message,
            recoverySuggestion,
            underlyingError,
        });
    }
}

export { AmplifyServerContextError };
//# sourceMappingURL=AmplifyServerContextError.mjs.map
