'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
const AuthError_1 = require("../../../../../errors/AuthError");
const textEncoder_1 = require("../../textEncoder");
const BigInteger_1 = require("../BigInteger");
const calculate_1 = require("../calculate");
const getBytesFromHex_1 = require("../getBytesFromHex");
const getHashFromData_1 = require("../getHashFromData");
const getHashFromHex_1 = require("../getHashFromHex");
const getHexFromBytes_1 = require("../getHexFromBytes");
const getHkdfKey_1 = require("../getHkdfKey");
const getPaddedHex_1 = require("../getPaddedHex");
const getRandomBytes_1 = require("../getRandomBytes");
const getRandomString_1 = require("../getRandomString");
/** @class */
class AuthenticationHelper {
    constructor({ userPoolName, a, g, A, N, }) {
        this.encoder = textEncoder_1.textEncoder;
        this.userPoolName = userPoolName;
        this.a = a;
        this.g = g;
        this.A = A;
        this.N = N;
        this.k = new BigInteger_1.BigInteger((0, getHashFromHex_1.getHashFromHex)(`${(0, getPaddedHex_1.getPaddedHex)(N)}${(0, getPaddedHex_1.getPaddedHex)(g)}`), 16);
    }
    /**
     * @returns {string} Generated random value included in password hash.
     */
    getRandomPassword() {
        if (!this.randomPassword) {
            throw new AuthError_1.AuthError({
                name: 'EmptyBigIntegerRandomPassword',
                message: 'random password is empty',
            });
        }
        return this.randomPassword;
    }
    /**
     * @returns {string} Generated random value included in devices hash.
     */
    getSaltToHashDevices() {
        if (!this.saltToHashDevices) {
            throw new AuthError_1.AuthError({
                name: 'EmptyBigIntegersaltToHashDevices',
                message: 'saltToHashDevices is empty',
            });
        }
        return this.saltToHashDevices;
    }
    /**
     * @returns {string} Value used to verify devices.
     */
    getVerifierDevices() {
        if (!this.verifierDevices) {
            throw new AuthError_1.AuthError({
                name: 'EmptyBigIntegerVerifierDevices',
                message: 'verifyDevices is empty',
            });
        }
        return this.verifierDevices;
    }
    /**
     * Generate salts and compute verifier.
     *
     * @param {string} deviceGroupKey Devices to generate verifier for.
     * @param {string} username User to generate verifier for.
     *
     * @returns {Promise<void>}
     */
    async generateHashDevice(deviceGroupKey, username) {
        this.randomPassword = (0, getRandomString_1.getRandomString)();
        const combinedString = `${deviceGroupKey}${username}:${this.randomPassword}`;
        const hashedString = (0, getHashFromData_1.getHashFromData)(combinedString);
        const hexRandom = (0, getHexFromBytes_1.getHexFromBytes)((0, getRandomBytes_1.getRandomBytes)(16));
        // The random hex will be unambiguously represented as a postive integer
        this.saltToHashDevices = (0, getPaddedHex_1.getPaddedHex)(new BigInteger_1.BigInteger(hexRandom, 16));
        return new Promise((resolve, reject) => {
            this.g.modPow(new BigInteger_1.BigInteger((0, getHashFromHex_1.getHashFromHex)(this.saltToHashDevices + hashedString), 16), this.N, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                this.verifierDevices = (0, getPaddedHex_1.getPaddedHex)(result);
                resolve();
            });
        });
    }
    /**
     * Calculates the final HKDF key based on computed S value, computed U value and the key
     *
     * @param {String} username Username.
     * @param {String} password Password.
     * @param {AuthBigInteger} B Server B value.
     * @param {AuthBigInteger} salt Generated salt.
     */
    async getPasswordAuthenticationKey({ username, password, serverBValue, salt, }) {
        if (serverBValue.mod(this.N).equals(BigInteger_1.BigInteger.ZERO)) {
            throw new Error('B cannot be zero.');
        }
        const U = (0, calculate_1.calculateU)({
            A: this.A,
            B: serverBValue,
        });
        const usernamePassword = `${this.userPoolName}${username}:${password}`;
        const usernamePasswordHash = (0, getHashFromData_1.getHashFromData)(usernamePassword);
        const x = new BigInteger_1.BigInteger((0, getHashFromHex_1.getHashFromHex)((0, getPaddedHex_1.getPaddedHex)(salt) + usernamePasswordHash), 16);
        const S = await (0, calculate_1.calculateS)({
            a: this.a,
            g: this.g,
            k: this.k,
            x,
            B: serverBValue,
            N: this.N,
            U,
        });
        const context = this.encoder.convert('Caldera Derived Key');
        const spacer = this.encoder.convert(String.fromCharCode(1));
        const info = new Uint8Array(context.byteLength + spacer.byteLength);
        info.set(context, 0);
        info.set(spacer, context.byteLength);
        const hkdfKey = (0, getHkdfKey_1.getHkdfKey)((0, getBytesFromHex_1.getBytesFromHex)((0, getPaddedHex_1.getPaddedHex)(S)), (0, getBytesFromHex_1.getBytesFromHex)((0, getPaddedHex_1.getPaddedHex)(U)), info);
        return hkdfKey;
    }
}
exports.default = AuthenticationHelper;
//# sourceMappingURL=AuthenticationHelper.js.map
