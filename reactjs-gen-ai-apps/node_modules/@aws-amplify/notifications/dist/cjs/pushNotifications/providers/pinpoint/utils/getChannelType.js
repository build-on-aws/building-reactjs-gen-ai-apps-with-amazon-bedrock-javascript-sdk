'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelType = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const react_native_1 = require("@aws-amplify/react-native");
const operatingSystem = (0, react_native_1.getOperatingSystem)();
const isAndroid = operatingSystem === 'android';
const isIos = operatingSystem === 'ios';
/**
 * @internal
 */
const getChannelType = () => {
    if (isAndroid) {
        // FCM was previously known as GCM and continues to be the channel type in Pinpoint
        return 'GCM';
    }
    if (isIos) {
        // If building in debug mode, use the APNs sandbox
        return __DEV__ ? 'APNS_SANDBOX' : 'APNS';
    }
    throw new utils_1.PlatformNotSupportedError();
};
exports.getChannelType = getChannelType;
//# sourceMappingURL=getChannelType.js.map
