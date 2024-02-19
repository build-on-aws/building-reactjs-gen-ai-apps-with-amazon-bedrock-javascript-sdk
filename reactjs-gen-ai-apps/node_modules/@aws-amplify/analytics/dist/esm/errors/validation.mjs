// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var AnalyticsValidationErrorCode;
(function (AnalyticsValidationErrorCode) {
    AnalyticsValidationErrorCode["NoAppId"] = "NoAppId";
    AnalyticsValidationErrorCode["NoCredentials"] = "NoCredentials";
    AnalyticsValidationErrorCode["NoEventName"] = "NoEventName";
    AnalyticsValidationErrorCode["NoRegion"] = "NoRegion";
    AnalyticsValidationErrorCode["InvalidTracker"] = "InvalidTracker";
    AnalyticsValidationErrorCode["UnsupportedPlatform"] = "UnsupportedPlatform";
    AnalyticsValidationErrorCode["NoTrackingId"] = "NoTrackingId";
    AnalyticsValidationErrorCode["InvalidFlushSize"] = "InvalidFlushSize";
})(AnalyticsValidationErrorCode || (AnalyticsValidationErrorCode = {}));
const validationErrorMap = {
    [AnalyticsValidationErrorCode.NoAppId]: {
        message: 'Missing application id.',
    },
    [AnalyticsValidationErrorCode.NoCredentials]: {
        message: 'Credentials should not be empty.',
    },
    [AnalyticsValidationErrorCode.NoEventName]: {
        message: 'Events must specify a name.',
    },
    [AnalyticsValidationErrorCode.NoRegion]: {
        message: 'Missing region.',
    },
    [AnalyticsValidationErrorCode.InvalidTracker]: {
        message: 'Invalid tracker type specified.',
    },
    [AnalyticsValidationErrorCode.UnsupportedPlatform]: {
        message: 'Only session tracking is supported on React Native.',
    },
    [AnalyticsValidationErrorCode.InvalidFlushSize]: {
        message: 'Invalid FlushSize, it should be smaller than BufferSize',
    },
    [AnalyticsValidationErrorCode.NoTrackingId]: {
        message: 'A trackingId is required to use Amazon Personalize',
    },
};

export { AnalyticsValidationErrorCode, validationErrorMap };
//# sourceMappingURL=validation.mjs.map
