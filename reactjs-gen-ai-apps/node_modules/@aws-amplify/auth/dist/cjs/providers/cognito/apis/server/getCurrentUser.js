'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = void 0;
const adapter_core_1 = require("@aws-amplify/core/internals/adapter-core");
const getCurrentUser_1 = require("../internal/getCurrentUser");
/**
 * Gets the current user from the idToken.
 *
 * @returns GetCurrentUserOutput
 * @throws - {@link InitiateAuthException} - Thrown when the service fails to refresh the tokens.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
const getCurrentUser = async (contextSpec) => {
    return (0, getCurrentUser_1.getCurrentUser)((0, adapter_core_1.getAmplifyServerContext)(contextSpec).amplify);
};
exports.getCurrentUser = getCurrentUser;
//# sourceMappingURL=getCurrentUser.js.map
