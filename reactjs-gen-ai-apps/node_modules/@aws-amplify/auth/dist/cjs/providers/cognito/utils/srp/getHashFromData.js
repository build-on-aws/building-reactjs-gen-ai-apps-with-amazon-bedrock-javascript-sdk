'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashFromData = void 0;
const sha256_js_1 = require("@aws-crypto/sha256-js");
const getHexFromBytes_1 = require("./getHexFromBytes");
/**
 * Calculate a hash from a `SourceData`
 * @param {SourceData} data Value to hash.
 * @returns {string} Hex-encoded hash.
 * @private
 */
const getHashFromData = (data) => {
    const sha256 = new sha256_js_1.Sha256();
    sha256.update(data);
    const hashedData = sha256.digestSync();
    const hashHexFromUint8 = (0, getHexFromBytes_1.getHexFromBytes)(hashedData);
    return new Array(64 - hashHexFromUint8.length).join('0') + hashHexFromUint8;
};
exports.getHashFromData = getHashFromData;
//# sourceMappingURL=getHashFromData.js.map
