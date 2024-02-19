'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.setToken = exports.getToken = exports.resolveCredentials = exports.isInitialized = exports.initialize = exports.getPushNotificationUserAgentString = void 0;
var getPushNotificationUserAgentString_1 = require("./getPushNotificationUserAgentString");
Object.defineProperty(exports, "getPushNotificationUserAgentString", { enumerable: true, get: function () { return getPushNotificationUserAgentString_1.getPushNotificationUserAgentString; } });
var initializationManager_1 = require("./initializationManager");
Object.defineProperty(exports, "initialize", { enumerable: true, get: function () { return initializationManager_1.initialize; } });
Object.defineProperty(exports, "isInitialized", { enumerable: true, get: function () { return initializationManager_1.isInitialized; } });
var resolveCredentials_1 = require("./resolveCredentials");
Object.defineProperty(exports, "resolveCredentials", { enumerable: true, get: function () { return resolveCredentials_1.resolveCredentials; } });
var tokenManager_1 = require("./tokenManager");
Object.defineProperty(exports, "getToken", { enumerable: true, get: function () { return tokenManager_1.getToken; } });
Object.defineProperty(exports, "setToken", { enumerable: true, get: function () { return tokenManager_1.setToken; } });
//# sourceMappingURL=index.js.map
