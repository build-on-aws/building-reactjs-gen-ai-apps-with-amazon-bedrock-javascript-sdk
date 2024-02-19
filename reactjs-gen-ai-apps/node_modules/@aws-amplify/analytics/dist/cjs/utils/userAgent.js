'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalyticsUserAgentString = exports.getAnalyticsUserAgent = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const utils_1 = require("@aws-amplify/core/internals/utils");
function getAnalyticsUserAgent(action) {
    return (0, utils_1.getAmplifyUserAgentObject)({
        category: utils_1.Category.Analytics,
        action,
    });
}
exports.getAnalyticsUserAgent = getAnalyticsUserAgent;
function getAnalyticsUserAgentString(action) {
    return (0, utils_1.getAmplifyUserAgent)({
        category: utils_1.Category.Analytics,
        action,
    });
}
exports.getAnalyticsUserAgentString = getAnalyticsUserAgentString;
//# sourceMappingURL=userAgent.js.map
