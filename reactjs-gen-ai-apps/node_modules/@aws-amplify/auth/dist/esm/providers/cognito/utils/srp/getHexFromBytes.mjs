import { SHORT_TO_HEX } from './constants.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Converts a Uint8Array of binary data to a hexadecimal encoded string.
 *
 * @param bytes The binary data to encode
 */
const getHexFromBytes = (bytes) => {
    let out = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
};

export { getHexFromBytes };
//# sourceMappingURL=getHexFromBytes.mjs.map
