'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsError = exports.disable = exports.enable = exports.flushEvents = exports.configureAutoTrack = exports.identifyUser = exports.record = void 0;
var pinpoint_1 = require("./providers/pinpoint");
Object.defineProperty(exports, "record", { enumerable: true, get: function () { return pinpoint_1.record; } });
Object.defineProperty(exports, "identifyUser", { enumerable: true, get: function () { return pinpoint_1.identifyUser; } });
Object.defineProperty(exports, "configureAutoTrack", { enumerable: true, get: function () { return pinpoint_1.configureAutoTrack; } });
Object.defineProperty(exports, "flushEvents", { enumerable: true, get: function () { return pinpoint_1.flushEvents; } });
var apis_1 = require("./apis");
Object.defineProperty(exports, "enable", { enumerable: true, get: function () { return apis_1.enable; } });
Object.defineProperty(exports, "disable", { enumerable: true, get: function () { return apis_1.disable; } });
var errors_1 = require("./errors");
Object.defineProperty(exports, "AnalyticsError", { enumerable: true, get: function () { return errors_1.AnalyticsError; } });
//# sourceMappingURL=index.js.map
