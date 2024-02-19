import { authErrorMessages } from '../../../../Errors.mjs';
import { AuthErrorCodes } from '../../../../common/AuthErrorStrings.mjs';
import { AuthError } from '../../../../errors/AuthError.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createOAuthError = (message, recoverySuggestion) => new AuthError({
    message: message ?? 'An error has occurred during the oauth process.',
    name: AuthErrorCodes.OAuthSignInError,
    recoverySuggestion: recoverySuggestion ?? authErrorMessages.oauthSignInError.log,
});

export { createOAuthError };
//# sourceMappingURL=createOAuthError.mjs.map
