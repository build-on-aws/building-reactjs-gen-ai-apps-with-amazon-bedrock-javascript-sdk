import { addEventListener } from '../../../../eventListeners/eventListeners.mjs';
import { assertIsInitialized } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const onNotificationReceivedInForeground = input => {
    assertIsInitialized();
    return addEventListener('foregroundMessageReceived', input);
};

export { onNotificationReceivedInForeground };
//# sourceMappingURL=onNotificationReceivedInForeground.native.mjs.map
