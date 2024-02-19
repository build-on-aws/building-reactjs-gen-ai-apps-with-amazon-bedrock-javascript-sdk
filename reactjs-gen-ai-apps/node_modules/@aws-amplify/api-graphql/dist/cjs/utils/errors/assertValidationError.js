'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertValidationError = void 0;
const GraphQLApiError_1 = require("./GraphQLApiError");
const validation_1 = require("./validation");
/**
 * @internal
 */
function assertValidationError(assertion, name) {
    const { message, recoverySuggestion } = validation_1.validationErrorMap[name];
    if (!assertion) {
        throw new GraphQLApiError_1.GraphQLApiError({ name, message, recoverySuggestion });
    }
}
exports.assertValidationError = assertValidationError;
//# sourceMappingURL=assertValidationError.js.map
