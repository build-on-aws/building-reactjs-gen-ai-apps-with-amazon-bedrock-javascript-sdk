import { AuthConfig, KeyValueStorageInterface, TokenProvider } from '@aws-amplify/core';
/**
 * Creates an object that implements {@link TokenProvider}.
 * @param authConfig The Auth config that the credentials provider needs to function.
 * @param keyValueStorage An object that implements the {@link KeyValueStorageInterface}.
 * @returns An object that implements {@link TokenProvider}.
 */
export declare const createUserPoolsTokenProvider: (authConfig: AuthConfig, keyValueStorage: KeyValueStorageInterface) => TokenProvider;
