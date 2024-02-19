import { SourceData } from '@aws-sdk/types';
/**
 * Returns the hashed data a `Uint8Array`.
 *
 * @param key `SourceData` to be used as hashing key.
 * @param data Hashable `SourceData`.
 * @returns `Uint8Array` created from the data as input to a hash function.
 */
export declare const getHashedData: (key: SourceData | null, data: SourceData) => Uint8Array;
/**
 * Returns the hashed data as a hex string.
 *
 * @param key `SourceData` to be used as hashing key.
 * @param data Hashable `SourceData`.
 * @returns String using lowercase hexadecimal characters created from the data as input to a hash function.
 *
 * @internal
 */
export declare const getHashedDataAsHex: (key: SourceData | null, data: SourceData) => string;
