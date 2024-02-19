'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoSecureRandomInt = void 0;
const globalHelpers_1 = require("./globalHelpers");
/*
 * Cryptographically secure pseudorandom number generator
 * As Math.random() is cryptographically not safe to use
 */
function cryptoSecureRandomInt() {
    const crypto = (0, globalHelpers_1.getCrypto)();
    const randomResult = crypto.getRandomValues(new Uint32Array(1))[0];
    return randomResult;
}
exports.cryptoSecureRandomInt = cryptoSecureRandomInt;
//# sourceMappingURL=cryptoSecureRandomInt.js.map
