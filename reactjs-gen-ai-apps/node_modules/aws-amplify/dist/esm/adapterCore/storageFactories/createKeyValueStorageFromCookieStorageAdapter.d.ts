import { KeyValueStorageInterface } from '@aws-amplify/core';
import { CookieStorage } from '@aws-amplify/core/internals/adapter-core';
export declare const defaultSetCookieOptions: CookieStorage.SetCookieOptions;
/**
 * Creates a Key Value storage interface using the `cookieStorageAdapter` as the
 * underlying storage.
 * @param cookieStorageAdapter An implementation of the `Adapter` in {@link CookieStorage}.
 * @returns An object that implements {@link KeyValueStorageInterface}.
 */
export declare const createKeyValueStorageFromCookieStorageAdapter: (cookieStorageAdapter: CookieStorage.Adapter) => KeyValueStorageInterface;
