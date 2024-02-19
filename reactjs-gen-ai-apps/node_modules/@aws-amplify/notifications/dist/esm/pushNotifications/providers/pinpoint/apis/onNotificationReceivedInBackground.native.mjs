import { addEventListener } from '../../../../eventListeners/eventListeners.mjs';
import { assertIsInitialized } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const onNotificationReceivedInBackground = input => {
    assertIsInitialized();
    return addEventListener('backgroundMessageReceived', input);
};

export { onNotificationReceivedInBackground };
//# sourceMappingURL=onNotificationReceivedInBackground.native.mjs.map
