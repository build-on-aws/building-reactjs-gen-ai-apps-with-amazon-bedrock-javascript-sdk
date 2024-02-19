import { loadAmplifyPushNotification } from '@aws-amplify/react-native';
import { assertIsInitialized } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const { getBadgeCount: getBadgeCountNative } = loadAmplifyPushNotification();
const getBadgeCount = async () => {
    assertIsInitialized();
    return getBadgeCountNative();
};

export { getBadgeCount };
//# sourceMappingURL=getBadgeCount.native.mjs.map
