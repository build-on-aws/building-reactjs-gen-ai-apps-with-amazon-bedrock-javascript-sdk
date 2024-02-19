'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsInitialized = exports.assert = exports.PushNotificationValidationErrorCode = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const initializationManager_1 = require("../utils/initializationManager");
const PushNotificationError_1 = require("./PushNotificationError");
var PushNotificationValidationErrorCode;
(function (PushNotificationValidationErrorCode) {
    PushNotificationValidationErrorCode["NoAppId"] = "NoAppId";
    PushNotificationValidationErrorCode["NoCredentials"] = "NoCredentials";
    PushNotificationValidationErrorCode["NoRegion"] = "NoRegion";
    PushNotificationValidationErrorCode["NotInitialized"] = "NotInitialized";
})(PushNotificationValidationErrorCode = exports.PushNotificationValidationErrorCode || (exports.PushNotificationValidationErrorCode = {}));
const pushNotificationValidationErrorMap = {
    [PushNotificationValidationErrorCode.NoAppId]: {
        message: 'Missing application id.',
    },
    [PushNotificationValidationErrorCode.NoCredentials]: {
        message: 'Credentials should not be empty.',
    },
    [PushNotificationValidationErrorCode.NoRegion]: {
        message: 'Missing region.',
    },
    [PushNotificationValidationErrorCode.NotInitialized]: {
        message: 'Push notification has not been initialized.',
        recoverySuggestion: 'Please make sure to first call `initializePushNotifications`.',
    },
};
exports.assert = (0, utils_1.createAssertionFunction)(pushNotificationValidationErrorMap, PushNotificationError_1.PushNotificationError);
const assertIsInitialized = () => {
    (0, exports.assert)((0, initializationManager_1.isInitialized)(), PushNotificationValidationErrorCode.NotInitialized);
};
exports.assertIsInitialized = assertIsInitialized;
//# sourceMappingURL=errorHelpers.js.map
