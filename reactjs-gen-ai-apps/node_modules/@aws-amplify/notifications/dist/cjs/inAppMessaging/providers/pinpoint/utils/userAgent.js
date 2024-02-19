'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.getInAppMessagingUserAgentString = exports.getInAppMessagingUserAgent = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const utils_1 = require("@aws-amplify/core/internals/utils");
function getInAppMessagingUserAgent(action) {
    return (0, utils_1.getAmplifyUserAgentObject)({
        category: utils_1.Category.InAppMessaging,
        action,
    });
}
exports.getInAppMessagingUserAgent = getInAppMessagingUserAgent;
function getInAppMessagingUserAgentString(action) {
    return (0, utils_1.getAmplifyUserAgent)({
        category: utils_1.Category.InAppMessaging,
        action,
    });
}
exports.getInAppMessagingUserAgentString = getInAppMessagingUserAgentString;
//# sourceMappingURL=userAgent.js.map
