import { loadAmplifyPushNotification } from '@aws-amplify/react-native';
import { assertIsInitialized } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const { requestPermissions: requestPermissionsNative } = loadAmplifyPushNotification();
const requestPermissions = async (input) => {
    assertIsInitialized();
    return requestPermissionsNative(input);
};

export { requestPermissions };
//# sourceMappingURL=requestPermissions.native.mjs.map
