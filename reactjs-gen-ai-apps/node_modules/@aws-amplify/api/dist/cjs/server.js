'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateClient = exports.isCancelError = exports.patch = exports.head = exports.del = exports.post = exports.put = exports.get = void 0;
var server_1 = require("@aws-amplify/api-rest/server");
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return server_1.get; } });
Object.defineProperty(exports, "put", { enumerable: true, get: function () { return server_1.put; } });
Object.defineProperty(exports, "post", { enumerable: true, get: function () { return server_1.post; } });
Object.defineProperty(exports, "del", { enumerable: true, get: function () { return server_1.del; } });
Object.defineProperty(exports, "head", { enumerable: true, get: function () { return server_1.head; } });
Object.defineProperty(exports, "patch", { enumerable: true, get: function () { return server_1.patch; } });
Object.defineProperty(exports, "isCancelError", { enumerable: true, get: function () { return server_1.isCancelError; } });
var server_2 = require("@aws-amplify/api-graphql/server");
Object.defineProperty(exports, "generateClient", { enumerable: true, get: function () { return server_2.generateClient; } });
//# sourceMappingURL=server.js.map
