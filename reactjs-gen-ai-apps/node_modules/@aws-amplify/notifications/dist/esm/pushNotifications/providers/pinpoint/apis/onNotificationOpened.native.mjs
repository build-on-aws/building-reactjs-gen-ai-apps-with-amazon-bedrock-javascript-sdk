import { addEventListener } from '../../../../eventListeners/eventListeners.mjs';
import { assertIsInitialized } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const onNotificationOpened = input => {
    assertIsInitialized();
    return addEventListener('notificationOpened', input);
};

export { onNotificationOpened };
//# sourceMappingURL=onNotificationOpened.native.mjs.map
