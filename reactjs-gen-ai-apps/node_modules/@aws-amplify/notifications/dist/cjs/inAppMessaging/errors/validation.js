'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorMap = exports.InAppMessagingValidationErrorCode = void 0;
var InAppMessagingValidationErrorCode;
(function (InAppMessagingValidationErrorCode) {
    InAppMessagingValidationErrorCode["NoAppId"] = "NoAppId";
    InAppMessagingValidationErrorCode["NoCredentials"] = "NoCredentials";
    InAppMessagingValidationErrorCode["NoRegion"] = "NoRegion";
    InAppMessagingValidationErrorCode["NotInitialized"] = "NotInitialized";
})(InAppMessagingValidationErrorCode = exports.InAppMessagingValidationErrorCode || (exports.InAppMessagingValidationErrorCode = {}));
exports.validationErrorMap = {
    [InAppMessagingValidationErrorCode.NoAppId]: {
        message: 'Missing application id.',
    },
    [InAppMessagingValidationErrorCode.NoCredentials]: {
        message: 'Credentials should not be empty.',
    },
    [InAppMessagingValidationErrorCode.NoRegion]: {
        message: 'Missing region.',
    },
    [InAppMessagingValidationErrorCode.NotInitialized]: {
        message: 'In-app messaging has not been initialized.',
        recoverySuggestion: 'Please make sure to first call `initializeInAppMessaging`.',
    },
};
//# sourceMappingURL=validation.js.map
