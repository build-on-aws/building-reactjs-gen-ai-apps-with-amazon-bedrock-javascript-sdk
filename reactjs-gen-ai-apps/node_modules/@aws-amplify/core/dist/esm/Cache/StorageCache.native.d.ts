import { StorageCacheCommon } from './StorageCacheCommon';
import { Cache, CacheConfig } from './types';
export declare class StorageCache extends StorageCacheCommon implements Cache {
    /**
     * initialize the cache
     * @param config - the configuration of the cache
     */
    constructor(config?: CacheConfig);
    protected getAllCacheKeys(options?: {
        omitSizeKey?: boolean;
    }): Promise<string[]>;
    protected getAllStorageKeys(): Promise<readonly string[]>;
    /**
     * Return a new instance of cache with customized configuration.
     * @param {Object} config - the customized configuration
     * @return {Object} - the new instance of Cache
     */
    createInstance(config: CacheConfig): Cache;
}
