'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageCache = void 0;
const react_native_1 = require("@aws-amplify/react-native");
const Logger_1 = require("../Logger");
const constants_1 = require("./constants");
const StorageCacheCommon_1 = require("./StorageCacheCommon");
const utils_1 = require("./utils");
const logger = new Logger_1.ConsoleLogger('StorageCache');
const AsyncStorage = (0, react_native_1.loadAsyncStorage)();
/*
 * Customized cache which based on the AsyncStorage with LRU implemented
 */
class StorageCache extends StorageCacheCommon_1.StorageCacheCommon {
    /**
     * initialize the cache
     * @param config - the configuration of the cache
     */
    constructor(config) {
        super({ config, keyValueStorage: AsyncStorage });
        this.getItem = this.getItem.bind(this);
        this.setItem = this.setItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    async getAllCacheKeys(options) {
        const { omitSizeKey } = options ?? {};
        const keys = [];
        for (const key of await AsyncStorage.getAllKeys()) {
            if (omitSizeKey && key === (0, utils_1.getCurrentSizeKey)(this.config.keyPrefix)) {
                continue;
            }
            if (key?.startsWith(this.config.keyPrefix)) {
                keys.push(key.substring(this.config.keyPrefix.length));
            }
        }
        return keys;
    }
    async getAllStorageKeys() {
        try {
            return AsyncStorage.getAllKeys();
        }
        catch (e) {
            logger.warn(`getAllKeys failed! ${e}`);
            return [];
        }
    }
    /**
     * Return a new instance of cache with customized configuration.
     * @param {Object} config - the customized configuration
     * @return {Object} - the new instance of Cache
     */
    createInstance(config) {
        if (!config.keyPrefix || config.keyPrefix === constants_1.defaultConfig.keyPrefix) {
            logger.error('invalid keyPrefix, setting keyPrefix with timeStamp');
            config.keyPrefix = utils_1.getCurrentTime.toString();
        }
        return new StorageCache(config);
    }
}
exports.StorageCache = StorageCache;
//# sourceMappingURL=StorageCache.native.js.map
