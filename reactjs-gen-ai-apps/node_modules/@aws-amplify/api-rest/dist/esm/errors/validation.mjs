// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var RestApiValidationErrorCode;
(function (RestApiValidationErrorCode) {
    RestApiValidationErrorCode["InvalidApiName"] = "InvalidApiName";
})(RestApiValidationErrorCode || (RestApiValidationErrorCode = {}));
const validationErrorMap = {
    [RestApiValidationErrorCode.InvalidApiName]: {
        message: 'API name is invalid.',
        recoverySuggestion: 'Check if the API name matches the one in your configuration or `aws-exports.js`',
    },
};

export { RestApiValidationErrorCode, validationErrorMap };
//# sourceMappingURL=validation.mjs.map
