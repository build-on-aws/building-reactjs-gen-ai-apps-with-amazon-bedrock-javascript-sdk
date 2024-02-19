'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserPoolsTokenProvider = exports.createAWSCredentialsAndIdentityIdProvider = exports.createKeyValueStorageFromCookieStorageAdapter = exports.runWithAmplifyServerContext = void 0;
var runWithAmplifyServerContext_1 = require("./runWithAmplifyServerContext");
Object.defineProperty(exports, "runWithAmplifyServerContext", { enumerable: true, get: function () { return runWithAmplifyServerContext_1.runWithAmplifyServerContext; } });
var storageFactories_1 = require("./storageFactories");
Object.defineProperty(exports, "createKeyValueStorageFromCookieStorageAdapter", { enumerable: true, get: function () { return storageFactories_1.createKeyValueStorageFromCookieStorageAdapter; } });
var cognito_1 = require("./authProvidersFactories/cognito");
Object.defineProperty(exports, "createAWSCredentialsAndIdentityIdProvider", { enumerable: true, get: function () { return cognito_1.createAWSCredentialsAndIdentityIdProvider; } });
Object.defineProperty(exports, "createUserPoolsTokenProvider", { enumerable: true, get: function () { return cognito_1.createUserPoolsTokenProvider; } });
//# sourceMappingURL=index.js.map
