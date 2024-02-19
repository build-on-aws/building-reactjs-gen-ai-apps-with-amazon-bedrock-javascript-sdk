import { AmplifyErrorMap } from '@aws-amplify/core/internals/utils';
export declare enum APIValidationErrorCode {
    NoAuthSession = "NoAuthSession",
    NoRegion = "NoRegion",
    NoCustomEndpoint = "NoCustomEndpoint"
}
export declare const validationErrorMap: AmplifyErrorMap<APIValidationErrorCode>;
