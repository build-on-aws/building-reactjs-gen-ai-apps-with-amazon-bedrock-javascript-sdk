'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmplifyServerContextError = exports.destroyAmplifyServerContext = exports.getAmplifyServerContext = exports.createAmplifyServerContext = void 0;
var serverContext_1 = require("./serverContext");
Object.defineProperty(exports, "createAmplifyServerContext", { enumerable: true, get: function () { return serverContext_1.createAmplifyServerContext; } });
Object.defineProperty(exports, "getAmplifyServerContext", { enumerable: true, get: function () { return serverContext_1.getAmplifyServerContext; } });
Object.defineProperty(exports, "destroyAmplifyServerContext", { enumerable: true, get: function () { return serverContext_1.destroyAmplifyServerContext; } });
var error_1 = require("./error");
Object.defineProperty(exports, "AmplifyServerContextError", { enumerable: true, get: function () { return error_1.AmplifyServerContextError; } });
//# sourceMappingURL=index.js.map
