'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStorage = void 0;
const react_native_1 = require("@aws-amplify/react-native");
const MEMORY_KEY_PREFIX = '@MemoryStorage:';
/**
 * @internal
 */
class DefaultStorage {
    constructor() {
        this.asyncStorage = (0, react_native_1.loadAsyncStorage)();
    }
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    setItem(key, value) {
        return this.asyncStorage.setItem(`${MEMORY_KEY_PREFIX}${key}`, value);
    }
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */
    getItem(key) {
        return this.asyncStorage.getItem(`${MEMORY_KEY_PREFIX}${key}`);
    }
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */
    removeItem(key) {
        return this.asyncStorage.removeItem(`${MEMORY_KEY_PREFIX}${key}`);
    }
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */
    async clear() {
        const allKeys = await this.asyncStorage.getAllKeys();
        return this.asyncStorage.multiRemove(allKeys.filter(key => key.startsWith(MEMORY_KEY_PREFIX)));
    }
}
exports.DefaultStorage = DefaultStorage;
//# sourceMappingURL=DefaultStorage.native.js.map
