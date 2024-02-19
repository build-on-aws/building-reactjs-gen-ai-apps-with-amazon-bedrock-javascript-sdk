'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeOAuthSignOut = void 0;
const core_1 = require("@aws-amplify/core");
const utils_1 = require("@aws-amplify/core/internals/utils");
const tokenProvider_1 = require("../../tokenProvider");
const completeOAuthSignOut = async (store) => {
    await store.clearOAuthData();
    tokenProvider_1.tokenOrchestrator.clearTokens();
    await (0, core_1.clearCredentials)();
    core_1.Hub.dispatch('auth', { event: 'signedOut' }, 'Auth', utils_1.AMPLIFY_SYMBOL);
};
exports.completeOAuthSignOut = completeOAuthSignOut;
//# sourceMappingURL=completeOAuthSignOut.js.map
