'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.onNotificationReceivedInForeground = void 0;
const eventListeners_1 = require("../../../../eventListeners");
const errorHelpers_1 = require("../../../errors/errorHelpers");
const onNotificationReceivedInForeground = input => {
    (0, errorHelpers_1.assertIsInitialized)();
    return (0, eventListeners_1.addEventListener)('foregroundMessageReceived', input);
};
exports.onNotificationReceivedInForeground = onNotificationReceivedInForeground;
//# sourceMappingURL=onNotificationReceivedInForeground.native.js.map
