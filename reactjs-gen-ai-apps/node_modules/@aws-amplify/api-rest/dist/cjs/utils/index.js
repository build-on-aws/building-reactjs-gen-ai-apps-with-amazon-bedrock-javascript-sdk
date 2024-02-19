'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.resolveApiUrl = exports.parseRestApiServiceError = exports.parseSigningInfo = exports.createCancellableOperation = void 0;
var createCancellableOperation_1 = require("./createCancellableOperation");
Object.defineProperty(exports, "createCancellableOperation", { enumerable: true, get: function () { return createCancellableOperation_1.createCancellableOperation; } });
var parseSigningInfo_1 = require("./parseSigningInfo");
Object.defineProperty(exports, "parseSigningInfo", { enumerable: true, get: function () { return parseSigningInfo_1.parseSigningInfo; } });
var serviceError_1 = require("./serviceError");
Object.defineProperty(exports, "parseRestApiServiceError", { enumerable: true, get: function () { return serviceError_1.parseRestApiServiceError; } });
var resolveApiUrl_1 = require("./resolveApiUrl");
Object.defineProperty(exports, "resolveApiUrl", { enumerable: true, get: function () { return resolveApiUrl_1.resolveApiUrl; } });
var logger_1 = require("./logger");
Object.defineProperty(exports, "logger", { enumerable: true, get: function () { return logger_1.logger; } });
//# sourceMappingURL=index.js.map
