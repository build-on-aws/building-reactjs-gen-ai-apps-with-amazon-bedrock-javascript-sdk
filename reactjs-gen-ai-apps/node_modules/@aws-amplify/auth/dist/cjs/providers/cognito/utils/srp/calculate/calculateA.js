'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateA = void 0;
const BigInteger_1 = require("../BigInteger");
/**
 * @internal
 */
const calculateA = async ({ a, g, N, }) => {
    return new Promise((resolve, reject) => {
        g.modPow(a, N, (err, A) => {
            if (err) {
                reject(err);
                return;
            }
            if (A.mod(N).equals(BigInteger_1.BigInteger.ZERO)) {
                reject(new Error('Illegal parameter. A mod N cannot be 0.'));
                return;
            }
            resolve(A);
        });
    });
};
exports.calculateA = calculateA;
//# sourceMappingURL=calculateA.js.map
