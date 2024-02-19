import { CognitoUserPoolConfig, KeyValueStorageInterface } from '@aws-amplify/core';
import { OAuthStore } from './types';
export declare class DefaultOAuthStore implements OAuthStore {
    keyValueStorage: KeyValueStorageInterface;
    cognitoConfig?: CognitoUserPoolConfig;
    constructor(keyValueStorage: KeyValueStorageInterface);
    clearOAuthInflightData(): Promise<void>;
    clearOAuthData(): Promise<void>;
    loadOAuthState(): Promise<string | null>;
    storeOAuthState(state: string): Promise<void>;
    loadPKCE(): Promise<string | null>;
    storePKCE(pkce: string): Promise<void>;
    setAuthConfig(authConfigParam: CognitoUserPoolConfig): void;
    loadOAuthInFlight(): Promise<boolean>;
    storeOAuthInFlight(inflight: boolean): Promise<void>;
    loadOAuthSignIn(): Promise<{
        isOAuthSignIn: boolean;
        preferPrivateSession: boolean;
    }>;
    storeOAuthSignIn(oauthSignIn: boolean, preferPrivateSession?: boolean): Promise<void>;
}
