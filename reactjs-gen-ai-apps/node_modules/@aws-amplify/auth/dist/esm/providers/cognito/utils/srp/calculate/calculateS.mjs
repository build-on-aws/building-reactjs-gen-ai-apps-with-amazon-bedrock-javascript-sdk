// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
const calculateS = async ({ a, g, k, x, B, N, U, }) => {
    return new Promise((resolve, reject) => {
        g.modPow(x, N, (outerErr, outerResult) => {
            if (outerErr) {
                reject(outerErr);
                return;
            }
            B.subtract(k.multiply(outerResult)).modPow(a.add(U.multiply(x)), N, (innerErr, innerResult) => {
                if (innerErr) {
                    reject(innerErr);
                    return;
                }
                resolve(innerResult.mod(N));
            });
        });
    });
};

export { calculateS };
//# sourceMappingURL=calculateS.mjs.map
