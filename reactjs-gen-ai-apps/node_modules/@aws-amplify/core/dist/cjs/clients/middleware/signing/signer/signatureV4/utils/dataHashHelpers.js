'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashedDataAsHex = exports.getHashedData = void 0;
// TODO: V6 update to different crypto dependency?
const sha256_js_1 = require("@aws-crypto/sha256-js");
const util_hex_encoding_1 = require("@smithy/util-hex-encoding");
/**
 * Returns the hashed data a `Uint8Array`.
 *
 * @param key `SourceData` to be used as hashing key.
 * @param data Hashable `SourceData`.
 * @returns `Uint8Array` created from the data as input to a hash function.
 */
const getHashedData = (key, data) => {
    const sha256 = new sha256_js_1.Sha256(key ?? undefined);
    sha256.update(data);
    // TODO: V6 flip to async digest
    const hashedData = sha256.digestSync();
    return hashedData;
};
exports.getHashedData = getHashedData;
/**
 * Returns the hashed data as a hex string.
 *
 * @param key `SourceData` to be used as hashing key.
 * @param data Hashable `SourceData`.
 * @returns String using lowercase hexadecimal characters created from the data as input to a hash function.
 *
 * @internal
 */
const getHashedDataAsHex = (key, data) => {
    const hashedData = (0, exports.getHashedData)(key, data);
    return (0, util_hex_encoding_1.toHex)(hashedData);
};
exports.getHashedDataAsHex = getHashedDataAsHex;
//# sourceMappingURL=dataHashHelpers.js.map
