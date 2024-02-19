import { AmplifyErrorMap } from '@aws-amplify/core/internals/utils';
export declare enum StorageValidationErrorCode {
    NoCredentials = "NoCredentials",
    NoIdentityId = "NoIdentityId",
    NoKey = "NoKey",
    NoSourceKey = "NoSourceKey",
    NoDestinationKey = "NoDestinationKey",
    NoBucket = "NoBucket",
    NoRegion = "NoRegion",
    UrlExpirationMaxLimitExceed = "UrlExpirationMaxLimitExceed",
    ObjectIsTooLarge = "ObjectIsTooLarge",
    InvalidUploadSource = "InvalidUploadSource"
}
export declare const validationErrorMap: AmplifyErrorMap<StorageValidationErrorCode>;
