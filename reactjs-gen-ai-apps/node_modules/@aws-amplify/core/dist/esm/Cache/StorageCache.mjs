import { ConsoleLogger } from '../Logger/ConsoleLogger.mjs';
import { KeyValueStorage } from '../storage/KeyValueStorage.mjs';
import { getLocalStorageWithFallback } from '../storage/utils.mjs';
import { defaultConfig } from './constants.mjs';
import { StorageCacheCommon } from './StorageCacheCommon.mjs';
import { getCurrentSizeKey, getCurrentTime } from './utils/cacheHelpers.mjs';
import './utils/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new ConsoleLogger('StorageCache');
/**
 * Customized storage based on the SessionStorage or LocalStorage with LRU implemented
 */
class StorageCache extends StorageCacheCommon {
    /**
     * initialize the cache
     * @param config - the configuration of the cache
     */
    constructor(config) {
        const storage = getLocalStorageWithFallback();
        super({ config, keyValueStorage: new KeyValueStorage(storage) });
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
            if (omitSizeKey && key === getCurrentSizeKey(this.config.keyPrefix)) {
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
        if (!config.keyPrefix || config.keyPrefix === defaultConfig.keyPrefix) {
            logger.error('invalid keyPrefix, setting keyPrefix with timeStamp');
            config.keyPrefix = getCurrentTime.toString();
        }
        return new StorageCache(config);
    }
}

export { StorageCache };
//# sourceMappingURL=StorageCache.mjs.map
