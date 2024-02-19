'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.onNotificationReceivedInBackground = void 0;
const eventListeners_1 = require("../../../../eventListeners");
const errorHelpers_1 = require("../../../errors/errorHelpers");
const onNotificationReceivedInBackground = input => {
    (0, errorHelpers_1.assertIsInitialized)();
    return (0, eventListeners_1.addEventListener)('backgroundMessageReceived', input);
};
exports.onNotificationReceivedInBackground = onNotificationReceivedInBackground;
//# sourceMappingURL=onNotificationReceivedInBackground.native.js.map
