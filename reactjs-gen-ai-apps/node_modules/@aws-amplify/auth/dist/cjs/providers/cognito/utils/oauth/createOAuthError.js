'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOAuthError = void 0;
const Errors_1 = require("../../../../Errors");
const AuthErrorStrings_1 = require("../../../../common/AuthErrorStrings");
const AuthError_1 = require("../../../../errors/AuthError");
const createOAuthError = (message, recoverySuggestion) => new AuthError_1.AuthError({
    message: message ?? 'An error has occurred during the oauth process.',
    name: AuthErrorStrings_1.AuthErrorCodes.OAuthSignInError,
    recoverySuggestion: recoverySuggestion ?? Errors_1.authErrorMessages.oauthSignInError.log,
});
exports.createOAuthError = createOAuthError;
//# sourceMappingURL=createOAuthError.js.map
