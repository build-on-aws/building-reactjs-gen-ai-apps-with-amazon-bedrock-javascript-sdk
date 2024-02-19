'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHexFromBytes = void 0;
const constants_1 = require("./constants");
/**
 * Converts a Uint8Array of binary data to a hexadecimal encoded string.
 *
 * @param bytes The binary data to encode
 */
const getHexFromBytes = (bytes) => {
    let out = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        out += constants_1.SHORT_TO_HEX[bytes[i]];
    }
    return out;
};
exports.getHexFromBytes = getHexFromBytes;
//# sourceMappingURL=getHexFromBytes.js.map
