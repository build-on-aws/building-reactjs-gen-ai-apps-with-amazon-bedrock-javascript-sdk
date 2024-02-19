import { getCrypto } from './globalHelpers/index.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/*
 * Cryptographically secure pseudorandom number generator
 * As Math.random() is cryptographically not safe to use
 */
function cryptoSecureRandomInt() {
    const crypto = getCrypto();
    const randomResult = crypto.getRandomValues(new Uint32Array(1))[0];
    return randomResult;
}

export { cryptoSecureRandomInt };
//# sourceMappingURL=cryptoSecureRandomInt.mjs.map
