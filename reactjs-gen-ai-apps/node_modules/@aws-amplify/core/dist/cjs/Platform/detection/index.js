'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.detect = void 0;
const types_1 = require("../types");
const React_1 = require("./React");
const Vue_1 = require("./Vue");
const Svelte_1 = require("./Svelte");
const Next_1 = require("./Next");
const Nuxt_1 = require("./Nuxt");
const Angular_1 = require("./Angular");
const ReactNative_1 = require("./ReactNative");
const Expo_1 = require("./Expo");
const Web_1 = require("./Web");
// These are in the order of detection where when both are detectable, the early Framework will be reported
const detectionMap = [
    // First, detect mobile
    { platform: types_1.Framework.Expo, detectionMethod: Expo_1.expoDetect },
    { platform: types_1.Framework.ReactNative, detectionMethod: ReactNative_1.reactNativeDetect },
    // Next, detect web frameworks
    { platform: types_1.Framework.NextJs, detectionMethod: Next_1.nextWebDetect },
    { platform: types_1.Framework.Nuxt, detectionMethod: Nuxt_1.nuxtWebDetect },
    { platform: types_1.Framework.Angular, detectionMethod: Angular_1.angularWebDetect },
    { platform: types_1.Framework.React, detectionMethod: React_1.reactWebDetect },
    { platform: types_1.Framework.VueJs, detectionMethod: Vue_1.vueWebDetect },
    { platform: types_1.Framework.Svelte, detectionMethod: Svelte_1.svelteWebDetect },
    { platform: types_1.Framework.WebUnknown, detectionMethod: Web_1.webDetect },
    // Last, detect ssr frameworks
    { platform: types_1.Framework.NextJsSSR, detectionMethod: Next_1.nextSSRDetect },
    { platform: types_1.Framework.NuxtSSR, detectionMethod: Nuxt_1.nuxtSSRDetect },
    { platform: types_1.Framework.ReactSSR, detectionMethod: React_1.reactSSRDetect },
    { platform: types_1.Framework.VueJsSSR, detectionMethod: Vue_1.vueSSRDetect },
    { platform: types_1.Framework.AngularSSR, detectionMethod: Angular_1.angularSSRDetect },
    { platform: types_1.Framework.SvelteSSR, detectionMethod: Svelte_1.svelteSSRDetect },
];
function detect() {
    return (detectionMap.find(detectionEntry => detectionEntry.detectionMethod())
        ?.platform || types_1.Framework.ServerSideUnknown);
}
exports.detect = detect;
//# sourceMappingURL=index.js.map
