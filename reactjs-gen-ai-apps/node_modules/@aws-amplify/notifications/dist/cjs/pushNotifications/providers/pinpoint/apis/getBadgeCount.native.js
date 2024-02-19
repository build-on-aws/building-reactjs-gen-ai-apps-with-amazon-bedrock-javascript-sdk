'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBadgeCount = void 0;
const react_native_1 = require("@aws-amplify/react-native");
const errorHelpers_1 = require("../../../errors/errorHelpers");
const { getBadgeCount: getBadgeCountNative } = (0, react_native_1.loadAmplifyPushNotification)();
const getBadgeCount = async () => {
    (0, errorHelpers_1.assertIsInitialized)();
    return getBadgeCountNative();
};
exports.getBadgeCount = getBadgeCount;
//# sourceMappingURL=getBadgeCount.native.js.map
