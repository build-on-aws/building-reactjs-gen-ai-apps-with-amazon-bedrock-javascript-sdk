'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestApiError = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
class RestApiError extends utils_1.ApiError {
    constructor(params) {
        super(params);
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = RestApiError;
        Object.setPrototypeOf(this, RestApiError.prototype);
    }
}
exports.RestApiError = RestApiError;
//# sourceMappingURL=RestApiError.js.map
