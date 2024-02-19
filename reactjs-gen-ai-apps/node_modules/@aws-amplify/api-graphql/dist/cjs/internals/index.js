'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateClient = exports.isCancelError = exports.cancel = exports.graphql = exports.InternalGraphQLAPIClass = exports.InternalGraphQLAPI = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var InternalGraphQLAPI_1 = require("./InternalGraphQLAPI");
Object.defineProperty(exports, "InternalGraphQLAPI", { enumerable: true, get: function () { return InternalGraphQLAPI_1.InternalGraphQLAPI; } });
Object.defineProperty(exports, "InternalGraphQLAPIClass", { enumerable: true, get: function () { return InternalGraphQLAPI_1.InternalGraphQLAPIClass; } });
var v6_1 = require("./v6");
Object.defineProperty(exports, "graphql", { enumerable: true, get: function () { return v6_1.graphql; } });
Object.defineProperty(exports, "cancel", { enumerable: true, get: function () { return v6_1.cancel; } });
Object.defineProperty(exports, "isCancelError", { enumerable: true, get: function () { return v6_1.isCancelError; } });
var generateClient_1 = require("./generateClient");
Object.defineProperty(exports, "generateClient", { enumerable: true, get: function () { return generateClient_1.generateClient; } });
//# sourceMappingURL=index.js.map
