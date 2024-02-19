import { loadAsyncStorage } from '@aws-amplify/react-native';
import { ConsoleLogger } from '../Logger/ConsoleLogger.mjs';
import { defaultConfig } from './constants.mjs';
import { StorageCacheCommon } from './StorageCacheCommon.mjs';
import { getCurrentSizeKey, getCurrentTime } from './utils/cacheHelpers.mjs';
import './utils/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new ConsoleLogger('StorageCache');
const AsyncStorage = loadAsyncStorage();
/*
 * Customized cache which based on the AsyncStorage with LRU implemented
 */
class StorageCache extends StorageCacheCommon {
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
            if (omitSizeKey && key === getCurrentSizeKey(this.config.keyPrefix)) {
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
        if (!config.keyPrefix || config.keyPrefix === defaultConfig.keyPrefix) {
            logger.error('invalid keyPrefix, setting keyPrefix with timeStamp');
            config.keyPrefix = getCurrentTime.toString();
        }
        return new StorageCache(config);
    }
}

export { StorageCache };
//# sourceMappingURL=StorageCache.native.mjs.map
