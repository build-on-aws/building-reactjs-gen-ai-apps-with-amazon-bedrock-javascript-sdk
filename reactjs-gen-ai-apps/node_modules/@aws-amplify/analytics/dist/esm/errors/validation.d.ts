import { AmplifyErrorMap } from '@aws-amplify/core/internals/utils';
export declare enum AnalyticsValidationErrorCode {
    NoAppId = "NoAppId",
    NoCredentials = "NoCredentials",
    NoEventName = "NoEventName",
    NoRegion = "NoRegion",
    InvalidTracker = "InvalidTracker",
    UnsupportedPlatform = "UnsupportedPlatform",
    NoTrackingId = "NoTrackingId",
    InvalidFlushSize = "InvalidFlushSize"
}
export declare const validationErrorMap: AmplifyErrorMap<AnalyticsValidationErrorCode>;
