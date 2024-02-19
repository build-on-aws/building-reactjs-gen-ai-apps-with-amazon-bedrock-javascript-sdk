import { getBytesFromHex } from './getBytesFromHex.mjs';
import { getHashFromData } from './getHashFromData.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Calculate a hash from a hex string
 * @param {string} hexStr Value to hash.
 * @returns {string} Hex-encoded hash.
 * @private
 */
const getHashFromHex = (hexStr) => getHashFromData(getBytesFromHex(hexStr));

export { getHashFromHex };
//# sourceMappingURL=getHashFromHex.mjs.map
