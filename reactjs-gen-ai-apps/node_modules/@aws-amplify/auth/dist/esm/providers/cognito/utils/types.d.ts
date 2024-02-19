import { AuthConfig, AuthTokens, AuthUserPoolConfig, CognitoUserPoolConfig } from '@aws-amplify/core';
import { AuthError } from '../../../errors/AuthError';
import { CognitoAuthTokens, DeviceMetadata } from '../tokenProvider/types';
export declare function isTypeUserPoolConfig(authConfig?: AuthConfig): authConfig is AuthUserPoolConfig;
export declare function assertAuthTokens(tokens?: AuthTokens | null): asserts tokens is AuthTokens;
export declare function assertIdTokenInAuthTokens(tokens?: AuthTokens): asserts tokens is AuthTokens;
export declare const oAuthTokenRefreshException: AuthError;
export declare const tokenRefreshException: AuthError;
export declare function assertAuthTokensWithRefreshToken(tokens?: CognitoAuthTokens | null): asserts tokens is CognitoAuthTokens & {
    refreshToken: string;
};
type NonNullableDeviceMetadata = DeviceMetadata & {
    deviceKey: string;
    deviceGroupKey: string;
};
export declare function assertDeviceMetadata(deviceMetadata?: DeviceMetadata | null): asserts deviceMetadata is NonNullableDeviceMetadata;
export declare const OAuthStorageKeys: {
    inflightOAuth: string;
    oauthSignIn: string;
    oauthPKCE: string;
    oauthState: string;
};
export interface OAuthStore {
    setAuthConfig(authConfigParam: CognitoUserPoolConfig): void;
    loadOAuthInFlight(): Promise<boolean>;
    storeOAuthInFlight(inflight: boolean): Promise<void>;
    loadOAuthSignIn(): Promise<{
        isOAuthSignIn: boolean;
        preferPrivateSession: boolean;
    }>;
    storeOAuthSignIn(oauthSignIn: boolean, preferPrivateSession: boolean): Promise<void>;
    loadOAuthState(): Promise<string | null>;
    storeOAuthState(state: string): Promise<void>;
    loadPKCE(): Promise<string | null>;
    storePKCE(pkce: string): Promise<void>;
    clearOAuthInflightData(): Promise<void>;
    clearOAuthData(): Promise<void>;
}
export {};
