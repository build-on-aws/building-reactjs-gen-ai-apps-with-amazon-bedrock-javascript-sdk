'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmplifyServerContextError = void 0;
const errors_1 = require("../../errors");
class AmplifyServerContextError extends errors_1.AmplifyError {
    constructor({ message, recoverySuggestion, underlyingError, }) {
        super({
            name: 'AmplifyServerContextError',
            message,
            recoverySuggestion,
            underlyingError,
        });
    }
}
exports.AmplifyServerContextError = AmplifyServerContextError;
//# sourceMappingURL=AmplifyServerContextError.js.map
