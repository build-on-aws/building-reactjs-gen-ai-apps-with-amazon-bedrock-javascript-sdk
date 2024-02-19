import { AuthBigInteger } from '../BigInteger';
/** @class */
export default class AuthenticationHelper {
    encoder: import("../../textEncoder/types").TextEncoder;
    userPoolName: string;
    randomPassword?: string;
    saltToHashDevices?: string;
    verifierDevices?: string;
    a: AuthBigInteger;
    N: AuthBigInteger;
    g: AuthBigInteger;
    k: AuthBigInteger;
    A: AuthBigInteger;
    constructor({ userPoolName, a, g, A, N, }: {
        userPoolName: string;
        a: AuthBigInteger;
        g: AuthBigInteger;
        A: AuthBigInteger;
        N: AuthBigInteger;
    });
    /**
     * @returns {string} Generated random value included in password hash.
     */
    getRandomPassword(): string;
    /**
     * @returns {string} Generated random value included in devices hash.
     */
    getSaltToHashDevices(): string;
    /**
     * @returns {string} Value used to verify devices.
     */
    getVerifierDevices(): string;
    /**
     * Generate salts and compute verifier.
     *
     * @param {string} deviceGroupKey Devices to generate verifier for.
     * @param {string} username User to generate verifier for.
     *
     * @returns {Promise<void>}
     */
    generateHashDevice(deviceGroupKey: string, username: string): Promise<void>;
    /**
     * Calculates the final HKDF key based on computed S value, computed U value and the key
     *
     * @param {String} username Username.
     * @param {String} password Password.
     * @param {AuthBigInteger} B Server B value.
     * @param {AuthBigInteger} salt Generated salt.
     */
    getPasswordAuthenticationKey({ username, password, serverBValue, salt, }: {
        username: string;
        password: string;
        serverBValue: AuthBigInteger;
        salt: AuthBigInteger;
    }): Promise<Uint8Array>;
}
