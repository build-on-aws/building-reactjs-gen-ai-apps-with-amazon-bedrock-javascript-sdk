'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHkdfKey = void 0;
const sha256_js_1 = require("@aws-crypto/sha256-js");
/**
 * Standard HKDF algorithm.
 *
 * @param {Uint8Array} ikm Input key material.
 * @param {Uint8Array} salt Salt value.
 * @param {Uint8Array} info Context and application specific info.
 *
 * @returns {Uint8Array} Strong key material.
 *
 * @internal
 */
const getHkdfKey = (ikm, salt, info) => {
    const awsCryptoHash = new sha256_js_1.Sha256(salt);
    awsCryptoHash.update(ikm);
    const resultFromAWSCryptoPrk = awsCryptoHash.digestSync();
    const awsCryptoHashHmac = new sha256_js_1.Sha256(resultFromAWSCryptoPrk);
    awsCryptoHashHmac.update(info);
    const resultFromAWSCryptoHmac = awsCryptoHashHmac.digestSync();
    const hashHexFromAWSCrypto = resultFromAWSCryptoHmac;
    return hashHexFromAWSCrypto.slice(0, 16);
};
exports.getHkdfKey = getHkdfKey;
//# sourceMappingURL=getHkdfKey.js.map
