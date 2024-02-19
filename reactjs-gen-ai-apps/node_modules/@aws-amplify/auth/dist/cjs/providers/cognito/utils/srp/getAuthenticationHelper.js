'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthenticationHelper = void 0;
const AuthenticationHelper_1 = require("./AuthenticationHelper");
const BigInteger_1 = require("./BigInteger");
const calculate_1 = require("./calculate");
const constants_1 = require("./constants");
const getHexFromBytes_1 = require("./getHexFromBytes");
const getRandomBytes_1 = require("./getRandomBytes");
/**
 * Returns a new {@link AuthenticationHelper} instance with randomly generated BigInteger seed
 *
 * @param userPoolName Cognito user pool name.
 * @returns An {@link AuthenticationHelper} instance.
 *
 * @internal
 */
const getAuthenticationHelper = async (userPoolName) => {
    const N = new BigInteger_1.BigInteger(constants_1.INIT_N, 16);
    const g = new BigInteger_1.BigInteger('2', 16);
    const a = generateRandomBigInteger();
    const A = await (0, calculate_1.calculateA)({ a, g, N });
    return new AuthenticationHelper_1.AuthenticationHelper({ userPoolName, a, g, A, N });
};
exports.getAuthenticationHelper = getAuthenticationHelper;
/**
 * Generates a random BigInteger.
 *
 * @returns {BigInteger} a random value.
 */
const generateRandomBigInteger = () => {
    // This will be interpreted as a postive 128-bit integer
    const hexRandom = (0, getHexFromBytes_1.getHexFromBytes)((0, getRandomBytes_1.getRandomBytes)(128));
    // There is no need to do randomBigInt.mod(this.N - 1) as N (3072-bit) is > 128 bytes (1024-bit)
    return new BigInteger_1.BigInteger(hexRandom, 16);
};
//# sourceMappingURL=getAuthenticationHelper.js.map
