'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorMap = exports.APIValidationErrorCode = void 0;
var APIValidationErrorCode;
(function (APIValidationErrorCode) {
    APIValidationErrorCode["NoAuthSession"] = "NoAuthSession";
    APIValidationErrorCode["NoRegion"] = "NoRegion";
    APIValidationErrorCode["NoCustomEndpoint"] = "NoCustomEndpoint";
})(APIValidationErrorCode = exports.APIValidationErrorCode || (exports.APIValidationErrorCode = {}));
exports.validationErrorMap = {
    [APIValidationErrorCode.NoAuthSession]: {
        message: 'Auth session should not be empty.',
    },
    // TODO: re-enable when working in all test environments:
    // [APIValidationErrorCode.NoEndpoint]: {
    // 	message: 'Missing endpoint',
    // },
    [APIValidationErrorCode.NoRegion]: {
        message: 'Missing region.',
    },
    [APIValidationErrorCode.NoCustomEndpoint]: {
        message: 'Custom endpoint region is present without custom endpoint.',
    },
};
//# sourceMappingURL=validation.js.map
