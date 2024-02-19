'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const types_1 = require("../../utils/types");
const getCurrentUser = async (amplify) => {
    const authConfig = amplify.getConfig().Auth?.Cognito;
    (0, utils_1.assertTokenProviderConfig)(authConfig);
    const tokens = await amplify.Auth.getTokens({ forceRefresh: false });
    (0, types_1.assertAuthTokens)(tokens);
    const { 'cognito:username': username, sub } = tokens.idToken?.payload ?? {};
    const authUser = {
        username: username,
        userId: sub,
    };
    const signInDetails = getSignInDetailsFromTokens(tokens);
    if (signInDetails) {
        authUser.signInDetails = signInDetails;
    }
    return authUser;
};
exports.getCurrentUser = getCurrentUser;
function getSignInDetailsFromTokens(tokens) {
    return tokens?.signInDetails;
}
//# sourceMappingURL=getCurrentUser.js.map
