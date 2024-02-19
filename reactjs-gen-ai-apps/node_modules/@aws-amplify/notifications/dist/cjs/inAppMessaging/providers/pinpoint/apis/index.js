'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearMessages = exports.notifyMessageInteraction = exports.onMessageActionTaken = exports.onMessageDisplayed = exports.onMessageDismissed = exports.onMessageReceived = exports.initializeInAppMessaging = exports.setConflictHandler = exports.dispatchEvent = exports.syncMessages = exports.identifyUser = void 0;
var identifyUser_1 = require("./identifyUser");
Object.defineProperty(exports, "identifyUser", { enumerable: true, get: function () { return identifyUser_1.identifyUser; } });
var syncMessages_1 = require("./syncMessages");
Object.defineProperty(exports, "syncMessages", { enumerable: true, get: function () { return syncMessages_1.syncMessages; } });
var dispatchEvent_1 = require("./dispatchEvent");
Object.defineProperty(exports, "dispatchEvent", { enumerable: true, get: function () { return dispatchEvent_1.dispatchEvent; } });
var setConflictHandler_1 = require("./setConflictHandler");
Object.defineProperty(exports, "setConflictHandler", { enumerable: true, get: function () { return setConflictHandler_1.setConflictHandler; } });
var initializeInAppMessaging_1 = require("./initializeInAppMessaging");
Object.defineProperty(exports, "initializeInAppMessaging", { enumerable: true, get: function () { return initializeInAppMessaging_1.initializeInAppMessaging; } });
var onMessageReceived_1 = require("./onMessageReceived");
Object.defineProperty(exports, "onMessageReceived", { enumerable: true, get: function () { return onMessageReceived_1.onMessageReceived; } });
var onMessageDismissed_1 = require("./onMessageDismissed");
Object.defineProperty(exports, "onMessageDismissed", { enumerable: true, get: function () { return onMessageDismissed_1.onMessageDismissed; } });
var onMessageDisplayed_1 = require("./onMessageDisplayed");
Object.defineProperty(exports, "onMessageDisplayed", { enumerable: true, get: function () { return onMessageDisplayed_1.onMessageDisplayed; } });
var onMessageActionTaken_1 = require("./onMessageActionTaken");
Object.defineProperty(exports, "onMessageActionTaken", { enumerable: true, get: function () { return onMessageActionTaken_1.onMessageActionTaken; } });
var notifyMessageInteraction_1 = require("./notifyMessageInteraction");
Object.defineProperty(exports, "notifyMessageInteraction", { enumerable: true, get: function () { return notifyMessageInteraction_1.notifyMessageInteraction; } });
var clearMessages_1 = require("./clearMessages");
Object.defineProperty(exports, "clearMessages", { enumerable: true, get: function () { return clearMessages_1.clearMessages; } });
//# sourceMappingURL=index.js.map
