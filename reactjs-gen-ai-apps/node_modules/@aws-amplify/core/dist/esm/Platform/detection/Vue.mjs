import { windowExists, keyPrefixMatch, globalExists } from './helpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with vue 3.3.2
function vueWebDetect() {
    return windowExists() && keyPrefixMatch(window, '__VUE');
}
function vueSSRDetect() {
    return globalExists() && keyPrefixMatch(global, '__VUE');
}

export { vueSSRDetect, vueWebDetect };
//# sourceMappingURL=Vue.mjs.map
