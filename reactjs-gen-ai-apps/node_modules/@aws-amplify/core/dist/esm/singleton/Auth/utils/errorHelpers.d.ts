import { AssertionFunction } from '../../../types';
export declare enum AuthConfigurationErrorCode {
    AuthTokenConfigException = "AuthTokenConfigException",
    AuthUserPoolAndIdentityPoolException = "AuthUserPoolAndIdentityPoolException",
    AuthUserPoolException = "AuthUserPoolException",
    InvalidIdentityPoolIdException = "InvalidIdentityPoolIdException",
    OAuthNotConfigureException = "OAuthNotConfigureException"
}
export declare const assert: AssertionFunction<AuthConfigurationErrorCode>;
