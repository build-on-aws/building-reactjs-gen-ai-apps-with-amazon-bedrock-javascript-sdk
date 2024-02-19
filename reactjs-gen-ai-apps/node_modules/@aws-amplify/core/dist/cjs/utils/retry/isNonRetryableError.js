'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonRetryableError = void 0;
const isNonRetryableError = (obj) => {
    const key = 'nonRetryable';
    return obj && obj[key];
};
exports.isNonRetryableError = isNonRetryableError;
//# sourceMappingURL=isNonRetryableError.js.map
