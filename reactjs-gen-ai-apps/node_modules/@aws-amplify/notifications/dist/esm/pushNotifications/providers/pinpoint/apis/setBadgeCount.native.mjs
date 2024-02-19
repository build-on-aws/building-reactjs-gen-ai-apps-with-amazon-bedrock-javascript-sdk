import { loadAmplifyPushNotification } from '@aws-amplify/react-native';
import { assertIsInitialized } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const { setBadgeCount: setBadgeCountNative } = loadAmplifyPushNotification();
const setBadgeCount = input => {
    assertIsInitialized();
    setBadgeCountNative(input);
};

export { setBadgeCount };
//# sourceMappingURL=setBadgeCount.native.mjs.map
