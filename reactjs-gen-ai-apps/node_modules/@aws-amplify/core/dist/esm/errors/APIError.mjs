import { AmplifyError } from './AmplifyError.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Error class for errors that associated with unsuccessful HTTP responses.
 * It's throw by API category REST API handlers and GraphQL query handlers for now.
 */
class ApiError extends AmplifyError {
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
const replicateApiErrorResponse = (response) => ({
    ...response,
    headers: { ...response.headers },
});

export { ApiError };
//# sourceMappingURL=APIError.mjs.map
