import { AmplifyErrorMap } from '@aws-amplify/core/internals/utils';
export declare enum InAppMessagingValidationErrorCode {
    NoAppId = "NoAppId",
    NoCredentials = "NoCredentials",
    NoRegion = "NoRegion",
    NotInitialized = "NotInitialized"
}
export declare const validationErrorMap: AmplifyErrorMap<InAppMessagingValidationErrorCode>;
