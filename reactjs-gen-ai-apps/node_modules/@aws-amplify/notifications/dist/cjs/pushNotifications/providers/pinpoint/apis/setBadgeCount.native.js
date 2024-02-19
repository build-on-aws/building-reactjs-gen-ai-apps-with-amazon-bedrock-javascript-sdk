'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBadgeCount = void 0;
const react_native_1 = require("@aws-amplify/react-native");
const errorHelpers_1 = require("../../../errors/errorHelpers");
const { setBadgeCount: setBadgeCountNative } = (0, react_native_1.loadAmplifyPushNotification)();
const setBadgeCount = input => {
    (0, errorHelpers_1.assertIsInitialized)();
    setBadgeCountNative(input);
};
exports.setBadgeCount = setBadgeCount;
//# sourceMappingURL=setBadgeCount.native.js.map
