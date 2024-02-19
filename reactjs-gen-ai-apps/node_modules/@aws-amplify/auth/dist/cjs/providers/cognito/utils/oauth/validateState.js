'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateState = exports.validationRecoverySuggestion = exports.validationFailedMessage = exports.flowCancelledMessage = void 0;
const AuthError_1 = require("../../../../errors/AuthError");
const Auth_1 = require("../../../../types/Auth");
const oAuthStore_1 = require("./oAuthStore");
exports.flowCancelledMessage = '`signInWithRedirect` has been canceled.';
exports.validationFailedMessage = 'An error occurred while validating the state.';
exports.validationRecoverySuggestion = 'Try to initiate an OAuth flow from Amplify';
const validateState = async (state) => {
    const savedState = await oAuthStore_1.oAuthStore.loadOAuthState();
    // This is because savedState only exists if the flow was initiated by Amplify
    const validatedState = state === savedState ? savedState : undefined;
    if (!validatedState) {
        throw new AuthError_1.AuthError({
            name: Auth_1.AuthErrorTypes.OAuthSignInError,
            message: state === null ? exports.flowCancelledMessage : exports.validationFailedMessage,
            recoverySuggestion: state === null ? undefined : exports.validationRecoverySuggestion,
        });
    }
    return validatedState;
};
exports.validateState = validateState;
//# sourceMappingURL=validateState.js.map
