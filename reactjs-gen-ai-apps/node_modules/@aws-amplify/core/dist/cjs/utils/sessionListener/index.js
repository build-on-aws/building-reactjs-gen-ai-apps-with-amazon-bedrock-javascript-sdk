'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionListener = exports.SESSION_STOP_EVENT = exports.SESSION_START_EVENT = void 0;
const SessionListener_1 = require("./SessionListener");
var constants_1 = require("./constants");
Object.defineProperty(exports, "SESSION_START_EVENT", { enumerable: true, get: function () { return constants_1.SESSION_START_EVENT; } });
Object.defineProperty(exports, "SESSION_STOP_EVENT", { enumerable: true, get: function () { return constants_1.SESSION_STOP_EVENT; } });
exports.sessionListener = new SessionListener_1.SessionListener();
//# sourceMappingURL=index.js.map
