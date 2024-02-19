import { StorageCacheCommon } from './StorageCacheCommon';
import { Cache, CacheConfig } from './types';
/**
 * Customized storage based on the SessionStorage or LocalStorage with LRU implemented
 */
export declare class StorageCache extends StorageCacheCommon implements Cache {
    storage: Storage;
    /**
     * initialize the cache
     * @param config - the configuration of the cache
     */
    constructor(config?: CacheConfig);
    protected getAllCacheKeys(options?: {
        omitSizeKey?: boolean;
    }): Promise<string[]>;
    /**
     * Return a new instance of cache with customized configuration.
     * @param {Object} config - the customized configuration
     * @return {Object} - the new instance of Cache
     */
    createInstance(config: CacheConfig): Cache;
}
