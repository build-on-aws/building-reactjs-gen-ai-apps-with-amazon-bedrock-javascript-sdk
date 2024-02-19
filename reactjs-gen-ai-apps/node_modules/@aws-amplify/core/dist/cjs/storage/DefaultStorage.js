'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStorage = void 0;
const KeyValueStorage_1 = require("./KeyValueStorage");
const utils_1 = require("./utils");
/**
 * @internal
 */
class DefaultStorage extends KeyValueStorage_1.KeyValueStorage {
    constructor() {
        super((0, utils_1.getLocalStorageWithFallback)());
    }
}
exports.DefaultStorage = DefaultStorage;
//# sourceMappingURL=DefaultStorage.js.map
