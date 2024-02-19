/**
 * Standard HKDF algorithm.
 *
 * @param {Uint8Array} ikm Input key material.
 * @param {Uint8Array} salt Salt value.
 * @param {Uint8Array} info Context and application specific info.
 *
 * @returns {Uint8Array} Strong key material.
 *
 * @internal
 */
export declare const getHkdfKey: (ikm: Uint8Array, salt: Uint8Array, info: Uint8Array) => Uint8Array;
