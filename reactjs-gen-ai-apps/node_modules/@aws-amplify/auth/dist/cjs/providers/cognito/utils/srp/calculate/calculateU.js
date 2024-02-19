'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateU = void 0;
const BigInteger_1 = require("../BigInteger");
const getHashFromHex_1 = require("../getHashFromHex");
const getPaddedHex_1 = require("../getPaddedHex");
/**
 * @internal
 */
const calculateU = ({ A, B, }) => {
    const U = new BigInteger_1.BigInteger((0, getHashFromHex_1.getHashFromHex)((0, getPaddedHex_1.getPaddedHex)(A) + (0, getPaddedHex_1.getPaddedHex)(B)), 16);
    if (U.equals(BigInteger_1.BigInteger.ZERO)) {
        throw new Error('U cannot be zero.');
    }
    return U;
};
exports.calculateU = calculateU;
//# sourceMappingURL=calculateU.js.map
