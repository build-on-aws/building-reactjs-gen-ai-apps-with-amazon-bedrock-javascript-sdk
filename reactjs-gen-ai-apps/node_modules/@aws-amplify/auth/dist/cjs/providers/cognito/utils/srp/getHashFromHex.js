'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashFromHex = void 0;
const getBytesFromHex_1 = require("./getBytesFromHex");
const getHashFromData_1 = require("./getHashFromData");
/**
 * Calculate a hash from a hex string
 * @param {string} hexStr Value to hash.
 * @returns {string} Hex-encoded hash.
 * @private
 */
const getHashFromHex = (hexStr) => (0, getHashFromData_1.getHashFromData)((0, getBytesFromHex_1.getBytesFromHex)(hexStr));
exports.getHashFromHex = getHashFromHex;
//# sourceMappingURL=getHashFromHex.js.map
