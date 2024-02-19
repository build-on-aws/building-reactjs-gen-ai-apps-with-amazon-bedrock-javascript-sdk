'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssertionFunction = void 0;
const AmplifyError_1 = require("./AmplifyError");
const createAssertionFunction = (errorMap, AssertionError = AmplifyError_1.AmplifyError) => (assertion, name, additionalContext) => {
    const { message, recoverySuggestion } = errorMap[name];
    if (!assertion) {
        throw new AssertionError({
            name,
            message: additionalContext
                ? `${message} ${additionalContext}`
                : message,
            recoverySuggestion,
        });
    }
};
exports.createAssertionFunction = createAssertionFunction;
//# sourceMappingURL=createAssertionFunction.js.map
