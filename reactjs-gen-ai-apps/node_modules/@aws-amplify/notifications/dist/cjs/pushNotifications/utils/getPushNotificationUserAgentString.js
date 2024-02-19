'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.getPushNotificationUserAgentString = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const utils_1 = require("@aws-amplify/core/internals/utils");
const getPushNotificationUserAgentString = (action) => (0, utils_1.getAmplifyUserAgent)({
    category: utils_1.Category.PushNotification,
    action,
});
exports.getPushNotificationUserAgentString = getPushNotificationUserAgentString;
//# sourceMappingURL=getPushNotificationUserAgentString.js.map
