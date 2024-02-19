'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationError = exports.setBadgeCount = exports.requestPermissions = exports.onTokenReceived = exports.onNotificationReceivedInForeground = exports.onNotificationReceivedInBackground = exports.onNotificationOpened = exports.initializePushNotifications = exports.identifyUser = exports.getPermissionStatus = exports.getLaunchNotification = exports.getBadgeCount = void 0;
var pinpoint_1 = require("./providers/pinpoint");
Object.defineProperty(exports, "getBadgeCount", { enumerable: true, get: function () { return pinpoint_1.getBadgeCount; } });
Object.defineProperty(exports, "getLaunchNotification", { enumerable: true, get: function () { return pinpoint_1.getLaunchNotification; } });
Object.defineProperty(exports, "getPermissionStatus", { enumerable: true, get: function () { return pinpoint_1.getPermissionStatus; } });
Object.defineProperty(exports, "identifyUser", { enumerable: true, get: function () { return pinpoint_1.identifyUser; } });
Object.defineProperty(exports, "initializePushNotifications", { enumerable: true, get: function () { return pinpoint_1.initializePushNotifications; } });
Object.defineProperty(exports, "onNotificationOpened", { enumerable: true, get: function () { return pinpoint_1.onNotificationOpened; } });
Object.defineProperty(exports, "onNotificationReceivedInBackground", { enumerable: true, get: function () { return pinpoint_1.onNotificationReceivedInBackground; } });
Object.defineProperty(exports, "onNotificationReceivedInForeground", { enumerable: true, get: function () { return pinpoint_1.onNotificationReceivedInForeground; } });
Object.defineProperty(exports, "onTokenReceived", { enumerable: true, get: function () { return pinpoint_1.onTokenReceived; } });
Object.defineProperty(exports, "requestPermissions", { enumerable: true, get: function () { return pinpoint_1.requestPermissions; } });
Object.defineProperty(exports, "setBadgeCount", { enumerable: true, get: function () { return pinpoint_1.setBadgeCount; } });
var errors_1 = require("./errors");
Object.defineProperty(exports, "PushNotificationError", { enumerable: true, get: function () { return errors_1.PushNotificationError; } });
//# sourceMappingURL=index.js.map
