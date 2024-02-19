import { SourceData } from '@smithy/types';
/**
 * Calculate a hash from a `SourceData`
 * @param {SourceData} data Value to hash.
 * @returns {string} Hex-encoded hash.
 * @private
 */
export declare const getHashFromData: (data: SourceData) => string;
