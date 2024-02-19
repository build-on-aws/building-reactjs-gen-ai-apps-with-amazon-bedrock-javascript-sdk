import { AmplifyError } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class StorageError extends AmplifyError {
    constructor(params) {
        super(params);
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = StorageError;
        Object.setPrototypeOf(this, StorageError.prototype);
    }
}

export { StorageError };
//# sourceMappingURL=StorageError.mjs.map
