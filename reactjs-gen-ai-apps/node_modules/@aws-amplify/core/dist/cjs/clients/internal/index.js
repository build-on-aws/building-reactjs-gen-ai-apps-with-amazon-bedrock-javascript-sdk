'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeTransferHandler = exports.composeServiceApi = void 0;
/**
 * This index should NOT be included in the ../index.ts because the composer functions
 * here requires TypeScript >= 4. Given other scoped packages may use TypeScript < 4,
 * they should not be exposed to upper level index.
 */
var composeServiceApi_1 = require("./composeServiceApi");
Object.defineProperty(exports, "composeServiceApi", { enumerable: true, get: function () { return composeServiceApi_1.composeServiceApi; } });
var composeTransferHandler_1 = require("./composeTransferHandler");
Object.defineProperty(exports, "composeTransferHandler", { enumerable: true, get: function () { return composeTransferHandler_1.composeTransferHandler; } });
//# sourceMappingURL=index.js.map
