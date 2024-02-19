import { getAmplifyServerContext } from '@aws-amplify/core/internals/adapter-core';
import { getCurrentUser as getCurrentUser$1 } from '../internal/getCurrentUser.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Gets the current user from the idToken.
 *
 * @returns GetCurrentUserOutput
 * @throws - {@link InitiateAuthException} - Thrown when the service fails to refresh the tokens.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
const getCurrentUser = async (contextSpec) => {
    return getCurrentUser$1(getAmplifyServerContext(contextSpec).amplify);
};

export { getCurrentUser };
//# sourceMappingURL=getCurrentUser.mjs.map
