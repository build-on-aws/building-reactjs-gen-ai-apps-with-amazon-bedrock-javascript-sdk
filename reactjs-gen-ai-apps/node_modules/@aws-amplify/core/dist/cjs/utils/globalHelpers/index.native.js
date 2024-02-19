'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAtob = exports.getBtoa = exports.getCrypto = void 0;
const react_native_1 = require("@aws-amplify/react-native");
const errors_1 = require("../../errors");
(0, react_native_1.loadGetRandomValues)();
const { encode, decode } = (0, react_native_1.loadBase64)();
const getCrypto = () => {
    if (typeof crypto !== 'undefined' &&
        typeof crypto.getRandomValues === 'function') {
        return crypto;
    }
    throw new errors_1.AmplifyError({
        name: 'MissingPolyfill',
        message: 'Cannot resolve the `crypto` function from the environment.',
    });
};
exports.getCrypto = getCrypto;
const getBtoa = () => {
    return encode;
};
exports.getBtoa = getBtoa;
const getAtob = () => {
    return decode;
};
exports.getAtob = getAtob;
//# sourceMappingURL=index.native.js.map
