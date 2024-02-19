import { Sha256 } from '@aws-crypto/sha256-js';
import { getHexFromBytes } from './getHexFromBytes.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Calculate a hash from a `SourceData`
 * @param {SourceData} data Value to hash.
 * @returns {string} Hex-encoded hash.
 * @private
 */
const getHashFromData = (data) => {
    const sha256 = new Sha256();
    sha256.update(data);
    const hashedData = sha256.digestSync();
    const hashHexFromUint8 = getHexFromBytes(hashedData);
    return new Array(64 - hashHexFromUint8.length).join('0') + hashHexFromUint8;
};

export { getHashFromData };
//# sourceMappingURL=getHashFromData.mjs.map
