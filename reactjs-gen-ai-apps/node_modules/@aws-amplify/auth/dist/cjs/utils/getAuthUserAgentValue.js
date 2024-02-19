'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthUserAgentValue = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const getAuthUserAgentValue = (action, customUserAgentDetails) => (0, utils_1.getAmplifyUserAgent)({
    category: utils_1.Category.Auth,
    action,
    ...customUserAgentDetails,
});
exports.getAuthUserAgentValue = getAuthUserAgentValue;
//# sourceMappingURL=getAuthUserAgentValue.js.map
