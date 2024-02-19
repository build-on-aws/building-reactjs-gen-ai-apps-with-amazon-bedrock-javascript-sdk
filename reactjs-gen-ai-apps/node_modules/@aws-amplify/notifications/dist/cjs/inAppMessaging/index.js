'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearMessages = exports.notifyMessageInteraction = exports.onMessageActionTaken = exports.onMessageDismissed = exports.onMessageDisplayed = exports.onMessageReceived = exports.initializeInAppMessaging = exports.setConflictHandler = exports.dispatchEvent = exports.syncMessages = exports.identifyUser = void 0;
var pinpoint_1 = require("./providers/pinpoint");
Object.defineProperty(exports, "identifyUser", { enumerable: true, get: function () { return pinpoint_1.identifyUser; } });
Object.defineProperty(exports, "syncMessages", { enumerable: true, get: function () { return pinpoint_1.syncMessages; } });
Object.defineProperty(exports, "dispatchEvent", { enumerable: true, get: function () { return pinpoint_1.dispatchEvent; } });
Object.defineProperty(exports, "setConflictHandler", { enumerable: true, get: function () { return pinpoint_1.setConflictHandler; } });
Object.defineProperty(exports, "initializeInAppMessaging", { enumerable: true, get: function () { return pinpoint_1.initializeInAppMessaging; } });
Object.defineProperty(exports, "onMessageReceived", { enumerable: true, get: function () { return pinpoint_1.onMessageReceived; } });
Object.defineProperty(exports, "onMessageDisplayed", { enumerable: true, get: function () { return pinpoint_1.onMessageDisplayed; } });
Object.defineProperty(exports, "onMessageDismissed", { enumerable: true, get: function () { return pinpoint_1.onMessageDismissed; } });
Object.defineProperty(exports, "onMessageActionTaken", { enumerable: true, get: function () { return pinpoint_1.onMessageActionTaken; } });
Object.defineProperty(exports, "notifyMessageInteraction", { enumerable: true, get: function () { return pinpoint_1.notifyMessageInteraction; } });
Object.defineProperty(exports, "clearMessages", { enumerable: true, get: function () { return pinpoint_1.clearMessages; } });
//# sourceMappingURL=index.js.map
