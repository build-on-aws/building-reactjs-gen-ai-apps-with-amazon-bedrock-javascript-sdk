'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageError = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const utils_1 = require("@aws-amplify/core/internals/utils");
class StorageError extends utils_1.AmplifyError {
    constructor(params) {
        super(params);
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = StorageError;
        Object.setPrototypeOf(this, StorageError.prototype);
    }
}
exports.StorageError = StorageError;
//# sourceMappingURL=StorageError.js.map
