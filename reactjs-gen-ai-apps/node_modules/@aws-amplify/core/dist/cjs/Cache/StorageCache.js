'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageCache = void 0;
const Logger_1 = require("../Logger");
const KeyValueStorage_1 = require("../storage/KeyValueStorage");
const utils_1 = require("../storage/utils");
const constants_1 = require("./constants");
const StorageCacheCommon_1 = require("./StorageCacheCommon");
const utils_2 = require("./utils");
const logger = new Logger_1.ConsoleLogger('StorageCache');
/**
 * Customized storage based on the SessionStorage or LocalStorage with LRU implemented
 */
class StorageCache extends StorageCacheCommon_1.StorageCacheCommon {
    /**
     * initialize the cache
     * @param config - the configuration of the cache
     */
    constructor(config) {
        const storage = (0, utils_1.getLocalStorageWithFallback)();
        super({ config, keyValueStorage: new KeyValueStorage_1.KeyValueStorage(storage) });
        this.storage = storage;
        this.getItem = this.getItem.bind(this);
        this.setItem = this.setItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    async getAllCacheKeys(options) {
        const { omitSizeKey } = options ?? {};
        const keys = [];
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            if (omitSizeKey && key === (0, utils_2.getCurrentSizeKey)(this.config.keyPrefix)) {
                continue;
            }
            if (key?.startsWith(this.config.keyPrefix)) {
                keys.push(key.substring(this.config.keyPrefix.length));
            }
        }
        return keys;
    }
    /**
     * Return a new instance of cache with customized configuration.
     * @param {Object} config - the customized configuration
     * @return {Object} - the new instance of Cache
     */
    createInstance(config) {
        if (!config.keyPrefix || config.keyPrefix === constants_1.defaultConfig.keyPrefix) {
            logger.error('invalid keyPrefix, setting keyPrefix with timeStamp');
            config.keyPrefix = utils_2.getCurrentTime.toString();
        }
        return new StorageCache(config);
    }
}
exports.StorageCache = StorageCache;
//# sourceMappingURL=StorageCache.js.map
