import { ModelInstanceMetadata, OpType, PaginationInput, PersistentModel, QueryOne } from '../../types';
declare class AsyncStorageDatabase {
    /**
     * Maps storeNames to a map of ulid->id
     */
    private _collectionInMemoryIndex;
    private storage;
    /**
     * Collection index is map of stores (i.e. sync, metadata, mutation event, and data)
     * @param storeName {string} - Name of the store
     * @returns Map of ulid->id
     */
    private getCollectionIndex;
    /**
     * Return ULID for store if it exists, otherwise create a new one
     * @param storeName {string} - Name of the store
     * @returns ulid
     */
    private getMonotonicFactory;
    init(): Promise<void>;
    save<T extends PersistentModel>(item: T, storeName: string, keys: string[], keyValuesPath: string): Promise<void>;
    batchSave<T extends PersistentModel>(storeName: string, items: ModelInstanceMetadata[], keys: string[]): Promise<[T, OpType][]>;
    get<T extends PersistentModel>(keyValuePath: string, storeName: string): Promise<T>;
    getOne(firstOrLast: QueryOne, storeName: string): Promise<any>;
    /**
     * This function gets all the records stored in async storage for a particular storeName
     * It then loads all the records for that filtered set of keys using multiGet()
     */
    getAll<T extends PersistentModel>(storeName: string, pagination?: PaginationInput<T>): Promise<T[]>;
    delete(key: string, storeName: string): Promise<void>;
    /**
     * Clear the AsyncStorage of all DataStore entries
     */
    clear(): Promise<void>;
    private getKeyForItem;
    private getLegacyKeyForItem;
    private getKeyPrefixForStoreItems;
}
export default AsyncStorageDatabase;
