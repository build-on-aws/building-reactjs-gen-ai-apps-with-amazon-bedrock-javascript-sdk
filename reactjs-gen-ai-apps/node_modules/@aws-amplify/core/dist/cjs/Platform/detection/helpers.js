'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyPrefixMatch = exports.processExists = exports.documentExists = exports.windowExists = exports.globalThisExists = exports.globalExists = void 0;
const globalExists = () => {
    return typeof global !== 'undefined';
};
exports.globalExists = globalExists;
const globalThisExists = () => {
    return typeof globalThis !== 'undefined';
};
exports.globalThisExists = globalThisExists;
const windowExists = () => {
    return typeof window !== 'undefined';
};
exports.windowExists = windowExists;
const documentExists = () => {
    return typeof document !== 'undefined';
};
exports.documentExists = documentExists;
const processExists = () => {
    return typeof process !== 'undefined';
};
exports.processExists = processExists;
const keyPrefixMatch = (object, prefix) => {
    return !!Object.keys(object).find(key => key.startsWith(prefix));
};
exports.keyPrefixMatch = keyPrefixMatch;
//# sourceMappingURL=helpers.js.map
