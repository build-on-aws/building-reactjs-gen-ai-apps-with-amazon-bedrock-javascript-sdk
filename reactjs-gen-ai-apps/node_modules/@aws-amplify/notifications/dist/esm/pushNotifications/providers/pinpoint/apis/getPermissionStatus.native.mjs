import { loadAmplifyPushNotification } from '@aws-amplify/react-native';
import { assertIsInitialized } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const { getPermissionStatus: getPermissionStatusNative } = loadAmplifyPushNotification();
const getPermissionStatus = async () => {
    assertIsInitialized();
    return getPermissionStatusNative();
};

export { getPermissionStatus };
//# sourceMappingURL=getPermissionStatus.native.mjs.map
