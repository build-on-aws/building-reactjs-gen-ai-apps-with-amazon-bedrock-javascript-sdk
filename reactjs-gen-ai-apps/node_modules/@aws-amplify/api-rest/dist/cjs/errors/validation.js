'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorMap = exports.RestApiValidationErrorCode = void 0;
var RestApiValidationErrorCode;
(function (RestApiValidationErrorCode) {
    RestApiValidationErrorCode["InvalidApiName"] = "InvalidApiName";
})(RestApiValidationErrorCode = exports.RestApiValidationErrorCode || (exports.RestApiValidationErrorCode = {}));
exports.validationErrorMap = {
    [RestApiValidationErrorCode.InvalidApiName]: {
        message: 'API name is invalid.',
        recoverySuggestion: 'Check if the API name matches the one in your configuration or `aws-exports.js`',
    },
};
//# sourceMappingURL=validation.js.map
