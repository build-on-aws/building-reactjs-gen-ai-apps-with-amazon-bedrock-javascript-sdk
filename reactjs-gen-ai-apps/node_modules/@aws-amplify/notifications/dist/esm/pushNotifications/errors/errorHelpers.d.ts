import { AssertionFunction } from '@aws-amplify/core/internals/utils';
export declare enum PushNotificationValidationErrorCode {
    NoAppId = "NoAppId",
    NoCredentials = "NoCredentials",
    NoRegion = "NoRegion",
    NotInitialized = "NotInitialized"
}
export declare const assert: AssertionFunction<PushNotificationValidationErrorCode>;
export declare const assertIsInitialized: () => void;
