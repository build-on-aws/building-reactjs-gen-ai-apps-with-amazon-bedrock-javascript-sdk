'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.CacheErrorCode = void 0;
const errors_1 = require("../../errors");
var CacheErrorCode;
(function (CacheErrorCode) {
    CacheErrorCode["NoCacheItem"] = "NoCacheItem";
    CacheErrorCode["NullNextNode"] = "NullNextNode";
    CacheErrorCode["NullPreviousNode"] = "NullPreviousNode";
})(CacheErrorCode = exports.CacheErrorCode || (exports.CacheErrorCode = {}));
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
exports.assert = (0, errors_1.createAssertionFunction)(cacheErrorMap);
//# sourceMappingURL=errorHelpers.js.map
