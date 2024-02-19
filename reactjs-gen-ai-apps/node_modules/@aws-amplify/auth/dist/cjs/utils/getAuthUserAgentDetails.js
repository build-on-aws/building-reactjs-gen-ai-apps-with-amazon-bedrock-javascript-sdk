'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthUserAgentDetails = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const getAuthUserAgentDetails = (action, customUserAgentDetails) => ({
    category: utils_1.Category.Auth,
    action,
    ...customUserAgentDetails,
});
exports.getAuthUserAgentDetails = getAuthUserAgentDetails;
//# sourceMappingURL=getAuthUserAgentDetails.js.map
