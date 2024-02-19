'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.head = exports.del = exports.put = exports.post = exports.get = exports.isCancelError = void 0;
var CanceledError_1 = require("./errors/CanceledError");
Object.defineProperty(exports, "isCancelError", { enumerable: true, get: function () { return CanceledError_1.isCancelError; } });
var apis_1 = require("./apis");
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return apis_1.get; } });
Object.defineProperty(exports, "post", { enumerable: true, get: function () { return apis_1.post; } });
Object.defineProperty(exports, "put", { enumerable: true, get: function () { return apis_1.put; } });
Object.defineProperty(exports, "del", { enumerable: true, get: function () { return apis_1.del; } });
Object.defineProperty(exports, "head", { enumerable: true, get: function () { return apis_1.head; } });
Object.defineProperty(exports, "patch", { enumerable: true, get: function () { return apis_1.patch; } });
//# sourceMappingURL=index.js.map
