import { AmplifyErrorCode } from '@aws-amplify/core/internals/utils';
import { InAppMessagingError } from './InAppMessagingError.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function assertServiceError(error) {
    if (!error ||
        error.name === 'Error' ||
        error instanceof TypeError) {
        throw new InAppMessagingError({
            name: AmplifyErrorCode.Unknown,
            message: 'An unknown error has occurred.',
            underlyingError: error,
        });
    }
}

export { assertServiceError };
//# sourceMappingURL=assertServiceError.mjs.map
