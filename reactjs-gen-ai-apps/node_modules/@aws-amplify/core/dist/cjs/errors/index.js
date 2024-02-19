'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.PlatformNotSupportedError = exports.createAssertionFunction = exports.ApiError = exports.AmplifyError = void 0;
var AmplifyError_1 = require("./AmplifyError");
Object.defineProperty(exports, "AmplifyError", { enumerable: true, get: function () { return AmplifyError_1.AmplifyError; } });
var APIError_1 = require("./APIError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return APIError_1.ApiError; } });
var createAssertionFunction_1 = require("./createAssertionFunction");
Object.defineProperty(exports, "createAssertionFunction", { enumerable: true, get: function () { return createAssertionFunction_1.createAssertionFunction; } });
var PlatformNotSupportedError_1 = require("./PlatformNotSupportedError");
Object.defineProperty(exports, "PlatformNotSupportedError", { enumerable: true, get: function () { return PlatformNotSupportedError_1.PlatformNotSupportedError; } });
var errorHelpers_1 = require("./errorHelpers");
Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return errorHelpers_1.assert; } });
//# sourceMappingURL=index.js.map
