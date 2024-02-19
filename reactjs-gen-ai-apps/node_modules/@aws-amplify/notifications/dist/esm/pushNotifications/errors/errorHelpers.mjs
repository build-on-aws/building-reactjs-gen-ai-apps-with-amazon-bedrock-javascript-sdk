import { createAssertionFunction } from '@aws-amplify/core/internals/utils';
import { isInitialized } from '../utils/initializationManager.mjs';
import { PushNotificationError } from './PushNotificationError.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var PushNotificationValidationErrorCode;
(function (PushNotificationValidationErrorCode) {
    PushNotificationValidationErrorCode["NoAppId"] = "NoAppId";
    PushNotificationValidationErrorCode["NoCredentials"] = "NoCredentials";
    PushNotificationValidationErrorCode["NoRegion"] = "NoRegion";
    PushNotificationValidationErrorCode["NotInitialized"] = "NotInitialized";
})(PushNotificationValidationErrorCode || (PushNotificationValidationErrorCode = {}));
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
const assert = createAssertionFunction(pushNotificationValidationErrorMap, PushNotificationError);
const assertIsInitialized = () => {
    assert(isInitialized(), PushNotificationValidationErrorCode.NotInitialized);
};

export { PushNotificationValidationErrorCode, assert, assertIsInitialized };
//# sourceMappingURL=errorHelpers.mjs.map
