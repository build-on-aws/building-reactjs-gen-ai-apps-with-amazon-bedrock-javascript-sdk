'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthStorageKeys = exports.assertDeviceMetadata = exports.assertAuthTokensWithRefreshToken = exports.tokenRefreshException = exports.oAuthTokenRefreshException = exports.assertIdTokenInAuthTokens = exports.assertAuthTokens = exports.isTypeUserPoolConfig = void 0;
const AuthError_1 = require("../../../errors/AuthError");
const constants_1 = require("../../../errors/constants");
function isTypeUserPoolConfig(authConfig) {
    if (authConfig &&
        authConfig.Cognito.userPoolId &&
        authConfig.Cognito.userPoolClientId) {
        return true;
    }
    return false;
}
exports.isTypeUserPoolConfig = isTypeUserPoolConfig;
function assertAuthTokens(tokens) {
    if (!tokens || !tokens.accessToken) {
        throw new AuthError_1.AuthError({
            name: constants_1.USER_UNAUTHENTICATED_EXCEPTION,
            message: 'User needs to be authenticated to call this API.',
            recoverySuggestion: 'Sign in before calling this API again.',
        });
    }
}
exports.assertAuthTokens = assertAuthTokens;
function assertIdTokenInAuthTokens(tokens) {
    if (!tokens || !tokens.idToken) {
        throw new AuthError_1.AuthError({
            name: constants_1.USER_UNAUTHENTICATED_EXCEPTION,
            message: 'User needs to be authenticated to call this API.',
            recoverySuggestion: 'Sign in before calling this API again.',
        });
    }
}
exports.assertIdTokenInAuthTokens = assertIdTokenInAuthTokens;
exports.oAuthTokenRefreshException = new AuthError_1.AuthError({
    name: constants_1.TOKEN_REFRESH_EXCEPTION,
    message: `Token refresh is not supported when authenticated with the 'implicit grant' (token) oauth flow. 
	Please change your oauth configuration to use 'code grant' flow.`,
    recoverySuggestion: `Please logout and change your Amplify configuration to use "code grant" flow. 
	E.g { responseType: 'code' }`,
});
exports.tokenRefreshException = new AuthError_1.AuthError({
    name: constants_1.USER_UNAUTHENTICATED_EXCEPTION,
    message: 'User needs to be authenticated to call this API.',
    recoverySuggestion: 'Sign in before calling this API again.',
});
function assertAuthTokensWithRefreshToken(tokens) {
    if (isAuthenticatedWithImplicitOauthFlow(tokens)) {
        throw exports.oAuthTokenRefreshException;
    }
    if (!isAuthenticatedWithRefreshToken(tokens)) {
        throw exports.tokenRefreshException;
    }
}
exports.assertAuthTokensWithRefreshToken = assertAuthTokensWithRefreshToken;
function assertDeviceMetadata(deviceMetadata) {
    if (!deviceMetadata ||
        !deviceMetadata.deviceKey ||
        !deviceMetadata.deviceGroupKey ||
        !deviceMetadata.randomPassword) {
        throw new AuthError_1.AuthError({
            name: constants_1.DEVICE_METADATA_NOT_FOUND_EXCEPTION,
            message: 'Either deviceKey, deviceGroupKey or secretPassword were not found during the sign-in process.',
            recoverySuggestion: 'Make sure to not clear storage after calling the signIn API.',
        });
    }
}
exports.assertDeviceMetadata = assertDeviceMetadata;
exports.OAuthStorageKeys = {
    inflightOAuth: 'inflightOAuth',
    oauthSignIn: 'oauthSignIn',
    oauthPKCE: 'oauthPKCE',
    oauthState: 'oauthState',
};
function isAuthenticated(tokens) {
    return tokens?.accessToken || tokens?.idToken;
}
function isAuthenticatedWithRefreshToken(tokens) {
    return isAuthenticated(tokens) && tokens?.refreshToken;
}
function isAuthenticatedWithImplicitOauthFlow(tokens) {
    return isAuthenticated(tokens) && !tokens?.refreshToken;
}
//# sourceMappingURL=types.js.map
