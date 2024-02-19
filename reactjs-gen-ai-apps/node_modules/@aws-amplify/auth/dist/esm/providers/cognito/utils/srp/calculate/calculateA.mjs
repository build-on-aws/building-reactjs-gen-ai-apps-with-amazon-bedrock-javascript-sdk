import BigInteger from '../BigInteger/BigInteger.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
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
            if (A.mod(N).equals(BigInteger.ZERO)) {
                reject(new Error('Illegal parameter. A mod N cannot be 0.'));
                return;
            }
            resolve(A);
        });
    });
};

export { calculateA };
//# sourceMappingURL=calculateA.mjs.map
