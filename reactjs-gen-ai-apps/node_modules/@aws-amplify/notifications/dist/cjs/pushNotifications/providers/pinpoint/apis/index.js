'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBadgeCount = exports.requestPermissions = exports.onTokenReceived = exports.onNotificationReceivedInForeground = exports.onNotificationReceivedInBackground = exports.onNotificationOpened = exports.initializePushNotifications = exports.identifyUser = exports.getPermissionStatus = exports.getLaunchNotification = exports.getBadgeCount = void 0;
var getBadgeCount_1 = require("./getBadgeCount");
Object.defineProperty(exports, "getBadgeCount", { enumerable: true, get: function () { return getBadgeCount_1.getBadgeCount; } });
var getLaunchNotification_1 = require("./getLaunchNotification");
Object.defineProperty(exports, "getLaunchNotification", { enumerable: true, get: function () { return getLaunchNotification_1.getLaunchNotification; } });
var getPermissionStatus_1 = require("./getPermissionStatus");
Object.defineProperty(exports, "getPermissionStatus", { enumerable: true, get: function () { return getPermissionStatus_1.getPermissionStatus; } });
var identifyUser_1 = require("./identifyUser");
Object.defineProperty(exports, "identifyUser", { enumerable: true, get: function () { return identifyUser_1.identifyUser; } });
var initializePushNotifications_1 = require("./initializePushNotifications");
Object.defineProperty(exports, "initializePushNotifications", { enumerable: true, get: function () { return initializePushNotifications_1.initializePushNotifications; } });
var onNotificationOpened_1 = require("./onNotificationOpened");
Object.defineProperty(exports, "onNotificationOpened", { enumerable: true, get: function () { return onNotificationOpened_1.onNotificationOpened; } });
var onNotificationReceivedInBackground_1 = require("./onNotificationReceivedInBackground");
Object.defineProperty(exports, "onNotificationReceivedInBackground", { enumerable: true, get: function () { return onNotificationReceivedInBackground_1.onNotificationReceivedInBackground; } });
var onNotificationReceivedInForeground_1 = require("./onNotificationReceivedInForeground");
Object.defineProperty(exports, "onNotificationReceivedInForeground", { enumerable: true, get: function () { return onNotificationReceivedInForeground_1.onNotificationReceivedInForeground; } });
var onTokenReceived_1 = require("./onTokenReceived");
Object.defineProperty(exports, "onTokenReceived", { enumerable: true, get: function () { return onTokenReceived_1.onTokenReceived; } });
var requestPermissions_1 = require("./requestPermissions");
Object.defineProperty(exports, "requestPermissions", { enumerable: true, get: function () { return requestPermissions_1.requestPermissions; } });
var setBadgeCount_1 = require("./setBadgeCount");
Object.defineProperty(exports, "setBadgeCount", { enumerable: true, get: function () { return setBadgeCount_1.setBadgeCount; } });
//# sourceMappingURL=index.js.map
