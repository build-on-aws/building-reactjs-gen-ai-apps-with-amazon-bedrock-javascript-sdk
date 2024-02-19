'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserAttributes = void 0;
const core_1 = require("@aws-amplify/core");
const fetchUserAttributes_1 = require("./internal/fetchUserAttributes");
/**
 * Fetches the current user attributes while authenticated.
 *
 * @throws - {@link GetUserException} - Cognito service errors thrown when the service is not able to get the user.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
const fetchUserAttributes = () => {
    return (0, fetchUserAttributes_1.fetchUserAttributes)(core_1.Amplify);
};
exports.fetchUserAttributes = fetchUserAttributes;
//# sourceMappingURL=fetchUserAttributes.js.map
