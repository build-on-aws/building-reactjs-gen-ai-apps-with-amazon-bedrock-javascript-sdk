import { ApiError } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class RestApiError extends ApiError {
    constructor(params) {
        super(params);
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = RestApiError;
        Object.setPrototypeOf(this, RestApiError.prototype);
    }
}

export { RestApiError };
//# sourceMappingURL=RestApiError.mjs.map
