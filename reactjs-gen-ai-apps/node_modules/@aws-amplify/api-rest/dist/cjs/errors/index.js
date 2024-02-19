'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorMap = exports.RestApiValidationErrorCode = exports.assertValidationError = exports.RestApiError = exports.isCancelError = exports.CanceledError = void 0;
var CanceledError_1 = require("./CanceledError");
Object.defineProperty(exports, "CanceledError", { enumerable: true, get: function () { return CanceledError_1.CanceledError; } });
Object.defineProperty(exports, "isCancelError", { enumerable: true, get: function () { return CanceledError_1.isCancelError; } });
var RestApiError_1 = require("./RestApiError");
Object.defineProperty(exports, "RestApiError", { enumerable: true, get: function () { return RestApiError_1.RestApiError; } });
var assertValidatonError_1 = require("./assertValidatonError");
Object.defineProperty(exports, "assertValidationError", { enumerable: true, get: function () { return assertValidatonError_1.assertValidationError; } });
var validation_1 = require("./validation");
Object.defineProperty(exports, "RestApiValidationErrorCode", { enumerable: true, get: function () { return validation_1.RestApiValidationErrorCode; } });
Object.defineProperty(exports, "validationErrorMap", { enumerable: true, get: function () { return validation_1.validationErrorMap; } });
//# sourceMappingURL=index.js.map
