'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.TokenProviderErrorCode = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
var TokenProviderErrorCode;
(function (TokenProviderErrorCode) {
    TokenProviderErrorCode["InvalidAuthTokens"] = "InvalidAuthTokens";
})(TokenProviderErrorCode = exports.TokenProviderErrorCode || (exports.TokenProviderErrorCode = {}));
const tokenValidationErrorMap = {
    [TokenProviderErrorCode.InvalidAuthTokens]: {
        message: 'Invalid tokens.',
        recoverySuggestion: 'Make sure the tokens are valid.',
    },
};
exports.assert = (0, utils_1.createAssertionFunction)(tokenValidationErrorMap);
//# sourceMappingURL=errorHelpers.js.map
