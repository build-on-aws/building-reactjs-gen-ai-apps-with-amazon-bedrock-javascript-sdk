'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashedPayload = exports.TOKEN_QUERY_PARAM = exports.presignUrl = exports.signRequest = void 0;
var signRequest_1 = require("./signRequest");
Object.defineProperty(exports, "signRequest", { enumerable: true, get: function () { return signRequest_1.signRequest; } });
var presignUrl_1 = require("./presignUrl");
Object.defineProperty(exports, "presignUrl", { enumerable: true, get: function () { return presignUrl_1.presignUrl; } });
var constants_1 = require("./constants");
Object.defineProperty(exports, "TOKEN_QUERY_PARAM", { enumerable: true, get: function () { return constants_1.TOKEN_QUERY_PARAM; } });
var getHashedPayload_1 = require("./utils/getHashedPayload");
Object.defineProperty(exports, "getHashedPayload", { enumerable: true, get: function () { return getHashedPayload_1.getHashedPayload; } });
//# sourceMappingURL=index.js.map
