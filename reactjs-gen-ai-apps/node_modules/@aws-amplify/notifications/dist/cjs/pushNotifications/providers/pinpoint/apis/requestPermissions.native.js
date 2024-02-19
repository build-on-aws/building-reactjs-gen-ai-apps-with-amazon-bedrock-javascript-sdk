'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestPermissions = void 0;
const react_native_1 = require("@aws-amplify/react-native");
const errorHelpers_1 = require("../../../errors/errorHelpers");
const { requestPermissions: requestPermissionsNative } = (0, react_native_1.loadAmplifyPushNotification)();
const requestPermissions = async (input) => {
    (0, errorHelpers_1.assertIsInitialized)();
    return requestPermissionsNative(input);
};
exports.requestPermissions = requestPermissions;
//# sourceMappingURL=requestPermissions.native.js.map
