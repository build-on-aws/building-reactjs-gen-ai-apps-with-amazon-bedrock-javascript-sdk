'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.oAuthStore = void 0;
const core_1 = require("@aws-amplify/core");
const signInWithRedirectStore_1 = require("../signInWithRedirectStore");
exports.oAuthStore = new signInWithRedirectStore_1.DefaultOAuthStore(core_1.defaultStorage);
//# sourceMappingURL=oAuthStore.js.map
