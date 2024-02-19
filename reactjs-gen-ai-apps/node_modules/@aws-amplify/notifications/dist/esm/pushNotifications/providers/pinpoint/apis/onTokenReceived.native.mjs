import { addEventListener } from '../../../../eventListeners/eventListeners.mjs';
import { assertIsInitialized } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const onTokenReceived = input => {
    assertIsInitialized();
    return addEventListener('tokenReceived', input);
};

export { onTokenReceived };
//# sourceMappingURL=onTokenReceived.native.mjs.map
