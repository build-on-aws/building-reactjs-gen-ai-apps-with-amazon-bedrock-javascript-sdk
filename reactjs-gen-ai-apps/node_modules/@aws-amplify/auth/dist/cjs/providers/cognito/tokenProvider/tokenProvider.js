'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenOrchestrator = exports.cognitoUserPoolsTokenProvider = void 0;
const CognitoUserPoolsTokenProvider_1 = require("./CognitoUserPoolsTokenProvider");
/**
 * The default provider for the JWT access token and ID token issued from the configured Cognito user pool. It manages
 * the refresh and storage of the tokens. It stores the tokens in `window.localStorage` if available, and falls back to
 * in-memory storage if not.
 */
exports.cognitoUserPoolsTokenProvider = new CognitoUserPoolsTokenProvider_1.CognitoUserPoolsTokenProvider();
exports.tokenOrchestrator = exports.cognitoUserPoolsTokenProvider.tokenOrchestrator;
//# sourceMappingURL=tokenProvider.js.map
