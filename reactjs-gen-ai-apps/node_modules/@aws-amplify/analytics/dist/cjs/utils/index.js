'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTrackerConfiguration = exports.updateProviderTrackers = exports.getAnalyticsUserAgentString = exports.getAnalyticsUserAgent = exports.isAnalyticsEnabled = exports.disableAnalytics = exports.enableAnalytics = exports.EventBuffer = exports.groupBy = exports.resolveCredentials = void 0;
var resolveCredentials_1 = require("./resolveCredentials");
Object.defineProperty(exports, "resolveCredentials", { enumerable: true, get: function () { return resolveCredentials_1.resolveCredentials; } });
var groupBy_1 = require("./groupBy");
Object.defineProperty(exports, "groupBy", { enumerable: true, get: function () { return groupBy_1.groupBy; } });
var eventBuffer_1 = require("./eventBuffer");
Object.defineProperty(exports, "EventBuffer", { enumerable: true, get: function () { return eventBuffer_1.EventBuffer; } });
var statusHelpers_1 = require("./statusHelpers");
Object.defineProperty(exports, "enableAnalytics", { enumerable: true, get: function () { return statusHelpers_1.enableAnalytics; } });
Object.defineProperty(exports, "disableAnalytics", { enumerable: true, get: function () { return statusHelpers_1.disableAnalytics; } });
Object.defineProperty(exports, "isAnalyticsEnabled", { enumerable: true, get: function () { return statusHelpers_1.isAnalyticsEnabled; } });
var userAgent_1 = require("./userAgent");
Object.defineProperty(exports, "getAnalyticsUserAgent", { enumerable: true, get: function () { return userAgent_1.getAnalyticsUserAgent; } });
Object.defineProperty(exports, "getAnalyticsUserAgentString", { enumerable: true, get: function () { return userAgent_1.getAnalyticsUserAgentString; } });
var trackerHelpers_1 = require("./trackerHelpers");
Object.defineProperty(exports, "updateProviderTrackers", { enumerable: true, get: function () { return trackerHelpers_1.updateProviderTrackers; } });
var trackerConfigHelpers_1 = require("./trackerConfigHelpers");
Object.defineProperty(exports, "validateTrackerConfiguration", { enumerable: true, get: function () { return trackerConfigHelpers_1.validateTrackerConfiguration; } });
//# sourceMappingURL=index.js.map
