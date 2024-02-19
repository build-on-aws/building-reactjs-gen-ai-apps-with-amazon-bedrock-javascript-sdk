'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertServiceError = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const InAppMessagingError_1 = require("./InAppMessagingError");
function assertServiceError(error) {
    if (!error ||
        error.name === 'Error' ||
        error instanceof TypeError) {
        throw new InAppMessagingError_1.InAppMessagingError({
            name: utils_1.AmplifyErrorCode.Unknown,
            message: 'An unknown error has occurred.',
            underlyingError: error,
        });
    }
}
exports.assertServiceError = assertServiceError;
//# sourceMappingURL=assertServiceError.js.map
