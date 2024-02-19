import { AssertionFunction } from '@aws-amplify/core/internals/utils';
export declare enum TokenProviderErrorCode {
    InvalidAuthTokens = "InvalidAuthTokens"
}
export declare const assert: AssertionFunction<TokenProviderErrorCode>;
