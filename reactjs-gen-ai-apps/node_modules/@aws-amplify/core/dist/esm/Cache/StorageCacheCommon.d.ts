import { KeyValueStorageInterface } from '../types';
import { CacheConfig, CacheItem, CacheItemOptions } from './types';
/**
 * Initialization of the cache
 *
 */
export declare abstract class StorageCacheCommon {
    protected config: CacheConfig;
    protected keyValueStorage: KeyValueStorageInterface;
    /**
     * Initialize the cache
     *
     * @param config - Custom configuration for this instance.
     */
    constructor({ config, keyValueStorage, }: {
        config?: CacheConfig;
        keyValueStorage: KeyValueStorageInterface;
    });
    protected abstract getAllCacheKeys(options?: {
        omitSizeKey?: boolean;
    }): Promise<string[]>;
    getModuleName(): string;
    /**
     * Set custom configuration for the cache instance.
     *
     * @param config - customized configuration (without keyPrefix, which can't be changed)
     *
     * @return - the current configuration
     */
    configure(config?: Omit<CacheConfig, 'keyPrefix'>): CacheConfig;
    /**
     * return the current size of the cache
     * @return {Promise}
     */
    getCurrentCacheSize(): Promise<number>;
    /**
     * Set item into cache. You can put number, string, boolean or object.
     * The cache will first check whether has the same key.
     * If it has, it will delete the old item and then put the new item in
     * The cache will pop out items if it is full
     * You can specify the cache item options. The cache will abort and output a warning:
     * If the key is invalid
     * If the size of the item exceeds itemMaxSize.
     * If the value is undefined
     * If incorrect cache item configuration
     * If error happened with browser storage
     *
     * @param {String} key - the key of the item
     * @param {Object} value - the value of the item
     * @param {Object} [options] - optional, the specified meta-data
     *
     * @return {Promise}
     */
    setItem(key: string, value: any, options?: Record<string, any>): Promise<void>;
    /**
     * Get item from cache. It will return null if item doesn’t exist or it has been expired.
     * If you specified callback function in the options,
     * then the function will be executed if no such item in the cache
     * and finally put the return value into cache.
     * Please make sure the callback function will return the value you want to put into the cache.
     * The cache will abort output a warning:
     * If the key is invalid
     * If error happened with AsyncStorage
     *
     * @param {String} key - the key of the item
     * @param {Object} [options] - the options of callback function
     *
     * @return {Promise} - return a promise resolves to be the value of the item
     */
    getItem(key: string, options?: CacheItemOptions): Promise<CacheItem['data']>;
    /**
     * remove item from the cache
     * The cache will abort output a warning:
     * If error happened with AsyncStorage
     * @param {String} key - the key of the item
     * @return {Promise}
     */
    removeItem(key: string): Promise<void>;
    /**
     * Return all the keys owned by this cache.
     * Will return an empty array if error occurred.
     *
     * @return {Promise}
     */
    getAllKeys(): Promise<string[]>;
    protected getStorage(): KeyValueStorageInterface;
    /**
     * check whether item is expired
     *
     * @param key - the key of the item
     *
     * @return true if the item is expired.
     */
    protected isExpired(key: string): Promise<boolean>;
    /**
     * delete item from cache
     *
     * @param prefixedKey - the key of the item
     * @param size - optional, the byte size of the item
     */
    protected removeCacheItem(prefixedKey: string, size?: number): Promise<void>;
    /**
     * produce a JSON object with meta-data and data value
     * @param value - the value of the item
     * @param options - optional, the specified meta-data
     *
     * @return - the item which has the meta-data and the value
     */
    protected fillCacheItem(key: string, value: object | number | string | boolean, options: CacheItemOptions): CacheItem;
    private sanitizeConfig;
    /**
     * increase current size of the cache
     *
     * @param amount - the amount of the cache szie which need to be increased
     */
    private increaseCurrentSizeInBytes;
    /**
     * decrease current size of the cache
     *
     * @param amount - the amount of the cache size which needs to be decreased
     */
    private decreaseCurrentSizeInBytes;
    /**
     * update the visited time if item has been visited
     *
     * @param item - the item which need to be updated
     * @param prefixedKey - the key of the item
     *
     * @return the updated item
     */
    private updateVisitedTime;
    /**
     * put item into cache
     *
     * @param prefixedKey - the key of the item
     * @param itemData - the value of the item
     * @param itemSizeInBytes - the byte size of the item
     */
    private setCacheItem;
    /**
     * total space needed when poping out items
     *
     * @param itemSize
     *
     * @return total space needed
     */
    private sizeToPop;
    /**
     * see whether cache is full
     *
     * @param itemSize
     *
     * @return true if cache is full
     */
    private isCacheFull;
    /**
     * get all the items we have, sort them by their priority,
     * if priority is same, sort them by their last visited time
     * pop out items from the low priority (5 is the lowest)
     * @private
     * @param keys - all the keys in this cache
     * @param sizeToPop - the total size of the items which needed to be poped out
     */
    private popOutItems;
    /**
     * Scan the storage and combine the following operations for efficiency
     *   1. Clear out all expired keys owned by this cache, not including the size key.
     *   2. Return the remaining keys.
     *
     * @return The remaining valid keys
     */
    private clearInvalidAndGetRemainingKeys;
    /**
     * clear the entire cache
     * The cache will abort and output a warning if error occurs
     * @return {Promise}
     */
    clear(): Promise<void>;
}
