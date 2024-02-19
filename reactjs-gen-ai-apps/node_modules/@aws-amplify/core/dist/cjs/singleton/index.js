'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCredentials = exports.fetchAuthSession = exports.Amplify = exports.AmplifyClass = void 0;
var Amplify_1 = require("./Amplify");
Object.defineProperty(exports, "AmplifyClass", { enumerable: true, get: function () { return Amplify_1.AmplifyClass; } });
Object.defineProperty(exports, "Amplify", { enumerable: true, get: function () { return Amplify_1.Amplify; } });
var fetchAuthSession_1 = require("./apis/fetchAuthSession");
Object.defineProperty(exports, "fetchAuthSession", { enumerable: true, get: function () { return fetchAuthSession_1.fetchAuthSession; } });
var clearCredentials_1 = require("./apis/clearCredentials");
Object.defineProperty(exports, "clearCredentials", { enumerable: true, get: function () { return clearCredentials_1.clearCredentials; } });
//# sourceMappingURL=index.js.map
