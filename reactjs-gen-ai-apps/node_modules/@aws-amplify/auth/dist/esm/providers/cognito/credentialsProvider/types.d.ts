import { AuthConfig, Identity } from '@aws-amplify/core';
export declare const IdentityIdStorageKeys: {
    identityId: string;
};
export interface IdentityIdStore {
    setAuthConfig(authConfigParam: AuthConfig): void;
    loadIdentityId(): Promise<Identity | null>;
    storeIdentityId(identity: Identity): Promise<void>;
    clearIdentityId(): Promise<void>;
}
