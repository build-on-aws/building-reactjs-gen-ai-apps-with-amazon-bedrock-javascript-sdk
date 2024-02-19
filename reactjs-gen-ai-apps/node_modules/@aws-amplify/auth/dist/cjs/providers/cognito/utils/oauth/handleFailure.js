'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFailure = void 0;
const core_1 = require("@aws-amplify/core");
const utils_1 = require("@aws-amplify/core/internals/utils");
const oAuthStore_1 = require("./oAuthStore");
const inflightPromise_1 = require("./inflightPromise");
const handleFailure = async (error) => {
    (0, inflightPromise_1.resolveAndClearInflightPromises)();
    await oAuthStore_1.oAuthStore.clearOAuthInflightData();
    core_1.Hub.dispatch('auth', { event: 'signInWithRedirect_failure', data: { error } }, 'Auth', utils_1.AMPLIFY_SYMBOL);
};
exports.handleFailure = handleFailure;
//# sourceMappingURL=handleFailure.js.map
