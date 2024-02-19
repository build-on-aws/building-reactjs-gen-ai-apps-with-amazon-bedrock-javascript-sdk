import { createAssertionFunction } from '../../errors/createAssertionFunction.mjs';
import '../../types/errors.mjs';
import '../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var CacheErrorCode;
(function (CacheErrorCode) {
    CacheErrorCode["NoCacheItem"] = "NoCacheItem";
    CacheErrorCode["NullNextNode"] = "NullNextNode";
    CacheErrorCode["NullPreviousNode"] = "NullPreviousNode";
})(CacheErrorCode || (CacheErrorCode = {}));
const cacheErrorMap = {
    [CacheErrorCode.NoCacheItem]: {
        message: 'Item not found in the cache storage.',
    },
    [CacheErrorCode.NullNextNode]: {
        message: 'Next node is null.',
    },
    [CacheErrorCode.NullPreviousNode]: {
        message: 'Previous node is null.',
    },
};
const assert = createAssertionFunction(cacheErrorMap);

export { CacheErrorCode, assert };
//# sourceMappingURL=errorHelpers.mjs.map
