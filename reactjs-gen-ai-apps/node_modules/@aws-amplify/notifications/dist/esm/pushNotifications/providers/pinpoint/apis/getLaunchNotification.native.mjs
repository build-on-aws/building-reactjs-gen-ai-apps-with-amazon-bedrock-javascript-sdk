import { loadAmplifyPushNotification } from '@aws-amplify/react-native';
import { assertIsInitialized } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const { getLaunchNotification: getLaunchNotificationNative } = loadAmplifyPushNotification();
const getLaunchNotification = async () => {
    assertIsInitialized();
    return getLaunchNotificationNative();
};

export { getLaunchNotification };
//# sourceMappingURL=getLaunchNotification.native.mjs.map
