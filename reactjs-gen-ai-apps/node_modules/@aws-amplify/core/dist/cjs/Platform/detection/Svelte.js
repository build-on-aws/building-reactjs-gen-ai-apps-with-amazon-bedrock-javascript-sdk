'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.svelteSSRDetect = exports.svelteWebDetect = void 0;
const helpers_1 = require("./helpers");
// Tested with svelte 3.59
function svelteWebDetect() {
    return (0, helpers_1.windowExists)() && (0, helpers_1.keyPrefixMatch)(window, '__SVELTE');
}
exports.svelteWebDetect = svelteWebDetect;
function svelteSSRDetect() {
    return ((0, helpers_1.processExists)() &&
        typeof process.env !== 'undefined' &&
        !!Object.keys(process.env).find(key => key.includes('svelte')));
}
exports.svelteSSRDetect = svelteSSRDetect;
//# sourceMappingURL=Svelte.js.map
