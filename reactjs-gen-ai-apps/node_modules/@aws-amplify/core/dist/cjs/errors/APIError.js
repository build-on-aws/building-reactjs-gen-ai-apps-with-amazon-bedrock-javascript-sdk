'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
const AmplifyError_1 = require("./AmplifyError");
/**
 * Error class for errors that associated with unsuccessful HTTP responses.
 * It's throw by API category REST API handlers and GraphQL query handlers for now.
 */
class ApiError extends AmplifyError_1.AmplifyError {
    /**
     * The unwrapped HTTP response causing the given API error.
     */
    get response() {
        return this._response
            ? replicateApiErrorResponse(this._response)
            : undefined;
    }
    constructor(params) {
        super(params);
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = ApiError;
        Object.setPrototypeOf(this, ApiError.prototype);
        if (params.response) {
            this._response = params.response;
        }
    }
}
exports.ApiError = ApiError;
const replicateApiErrorResponse = (response) => ({
    ...response,
    headers: { ...response.headers },
});
//# sourceMappingURL=APIError.js.map
