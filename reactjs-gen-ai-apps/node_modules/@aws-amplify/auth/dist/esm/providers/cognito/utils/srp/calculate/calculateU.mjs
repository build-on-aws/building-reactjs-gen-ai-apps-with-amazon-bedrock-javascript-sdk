import BigInteger from '../BigInteger/BigInteger.mjs';
import { getHashFromHex } from '../getHashFromHex.mjs';
import { getPaddedHex } from '../getPaddedHex.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
const calculateU = ({ A, B, }) => {
    const U = new BigInteger(getHashFromHex(getPaddedHex(A) + getPaddedHex(B)), 16);
    if (U.equals(BigInteger.ZERO)) {
        throw new Error('U cannot be zero.');
    }
    return U;
};

export { calculateU };
//# sourceMappingURL=calculateU.mjs.map
