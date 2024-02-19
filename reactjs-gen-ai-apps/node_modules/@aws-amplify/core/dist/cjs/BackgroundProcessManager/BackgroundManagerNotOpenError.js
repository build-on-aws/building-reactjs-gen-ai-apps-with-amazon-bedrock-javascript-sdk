'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundManagerNotOpenError = void 0;
class BackgroundManagerNotOpenError extends Error {
    constructor(message) {
        super(`BackgroundManagerNotOpenError: ${message}`);
    }
}
exports.BackgroundManagerNotOpenError = BackgroundManagerNotOpenError;
//# sourceMappingURL=BackgroundManagerNotOpenError.js.map
