import { AuthError } from '../../../../../errors/AuthError.mjs';
import { textEncoder } from '../../textEncoder/index.mjs';
import BigInteger from '../BigInteger/BigInteger.mjs';
import { calculateS } from '../calculate/calculateS.mjs';
import { calculateU } from '../calculate/calculateU.mjs';
import { getBytesFromHex } from '../getBytesFromHex.mjs';
import { getHashFromData } from '../getHashFromData.mjs';
import { getHashFromHex } from '../getHashFromHex.mjs';
import { getHexFromBytes } from '../getHexFromBytes.mjs';
import { getHkdfKey } from '../getHkdfKey.mjs';
import { getPaddedHex } from '../getPaddedHex.mjs';
import { getRandomBytes } from '../getRandomBytes.mjs';
import { getRandomString } from '../getRandomString.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/** @class */
class AuthenticationHelper {
    constructor({ userPoolName, a, g, A, N, }) {
        this.encoder = textEncoder;
        this.userPoolName = userPoolName;
        this.a = a;
        this.g = g;
        this.A = A;
        this.N = N;
        this.k = new BigInteger(getHashFromHex(`${getPaddedHex(N)}${getPaddedHex(g)}`), 16);
    }
    /**
     * @returns {string} Generated random value included in password hash.
     */
    getRandomPassword() {
        if (!this.randomPassword) {
            throw new AuthError({
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
            throw new AuthError({
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
            throw new AuthError({
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
        this.randomPassword = getRandomString();
        const combinedString = `${deviceGroupKey}${username}:${this.randomPassword}`;
        const hashedString = getHashFromData(combinedString);
        const hexRandom = getHexFromBytes(getRandomBytes(16));
        // The random hex will be unambiguously represented as a postive integer
        this.saltToHashDevices = getPaddedHex(new BigInteger(hexRandom, 16));
        return new Promise((resolve, reject) => {
            this.g.modPow(new BigInteger(getHashFromHex(this.saltToHashDevices + hashedString), 16), this.N, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                this.verifierDevices = getPaddedHex(result);
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
        if (serverBValue.mod(this.N).equals(BigInteger.ZERO)) {
            throw new Error('B cannot be zero.');
        }
        const U = calculateU({
            A: this.A,
            B: serverBValue,
        });
        const usernamePassword = `${this.userPoolName}${username}:${password}`;
        const usernamePasswordHash = getHashFromData(usernamePassword);
        const x = new BigInteger(getHashFromHex(getPaddedHex(salt) + usernamePasswordHash), 16);
        const S = await calculateS({
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
        const hkdfKey = getHkdfKey(getBytesFromHex(getPaddedHex(S)), getBytesFromHex(getPaddedHex(U)), info);
        return hkdfKey;
    }
}

export { AuthenticationHelper as default };
//# sourceMappingURL=AuthenticationHelper.mjs.map
