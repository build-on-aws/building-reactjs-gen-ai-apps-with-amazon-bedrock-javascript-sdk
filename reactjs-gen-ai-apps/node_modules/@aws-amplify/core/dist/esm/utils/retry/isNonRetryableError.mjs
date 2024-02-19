// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const isNonRetryableError = (obj) => {
    const key = 'nonRetryable';
    return obj && obj[key];
};

export { isNonRetryableError };
//# sourceMappingURL=isNonRetryableError.mjs.map
