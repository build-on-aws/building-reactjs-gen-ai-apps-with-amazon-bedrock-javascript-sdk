'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.vueSSRDetect = exports.vueWebDetect = void 0;
const helpers_1 = require("./helpers");
// Tested with vue 3.3.2
function vueWebDetect() {
    return (0, helpers_1.windowExists)() && (0, helpers_1.keyPrefixMatch)(window, '__VUE');
}
exports.vueWebDetect = vueWebDetect;
function vueSSRDetect() {
    return (0, helpers_1.globalExists)() && (0, helpers_1.keyPrefixMatch)(global, '__VUE');
}
exports.vueSSRDetect = vueSSRDetect;
//# sourceMappingURL=Vue.js.map
