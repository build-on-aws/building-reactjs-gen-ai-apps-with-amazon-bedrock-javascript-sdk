'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveConfig = void 0;
const core_1 = require("@aws-amplify/core");
const errors_1 = require("../../../errors");
/**
 * @internal
 */
const resolveConfig = () => {
    const { appId, region } = core_1.Amplify.getConfig().Notifications?.PushNotification?.Pinpoint ?? {};
    (0, errors_1.assert)(!!appId, errors_1.PushNotificationValidationErrorCode.NoAppId);
    (0, errors_1.assert)(!!region, errors_1.PushNotificationValidationErrorCode.NoRegion);
    return { appId, region };
};
exports.resolveConfig = resolveConfig;
//# sourceMappingURL=resolveConfig.js.map
