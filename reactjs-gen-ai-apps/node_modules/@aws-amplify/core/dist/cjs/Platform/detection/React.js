'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactSSRDetect = exports.reactWebDetect = void 0;
const helpers_1 = require("./helpers");
// Tested with react 18.2 - built using Vite
function reactWebDetect() {
    const elementKeyPrefixedWithReact = (key) => {
        return key.startsWith('_react') || key.startsWith('__react');
    };
    const elementIsReactEnabled = (element) => {
        return Object.keys(element).find(elementKeyPrefixedWithReact);
    };
    const allElementsWithId = () => Array.from(document.querySelectorAll('[id]'));
    return (0, helpers_1.documentExists)() && allElementsWithId().some(elementIsReactEnabled);
}
exports.reactWebDetect = reactWebDetect;
function reactSSRDetect() {
    return ((0, helpers_1.processExists)() &&
        typeof process.env !== 'undefined' &&
        !!Object.keys(process.env).find(key => key.includes('react')));
}
exports.reactSSRDetect = reactSSRDetect;
// use the some
//# sourceMappingURL=React.js.map
