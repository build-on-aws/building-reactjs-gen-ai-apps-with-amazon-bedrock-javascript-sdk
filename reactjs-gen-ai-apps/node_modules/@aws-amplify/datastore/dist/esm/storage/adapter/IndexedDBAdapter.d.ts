import * as idb from 'idb';
import { ModelInstanceMetadata, ModelPredicate, OpType, PaginationInput, PersistentModel, PersistentModelConstructor, QueryOne } from '../../types';
import { StorageAdapterBase } from './StorageAdapterBase';
declare class IndexedDBAdapter extends StorageAdapterBase {
    protected db: idb.IDBPDatabase;
    private safariCompatabilityMode;
    protected preSetUpChecks(): Promise<void>;
    protected preOpCheck(): Promise<void>;
    /**
     * Initialize IndexedDB database
     * Create new DB if one doesn't exist
     * Upgrade outdated DB
     *
     * Called by `StorageAdapterBase.setUp()`
     *
     * @returns IDB Database instance
     */
    protected initDb(): Promise<idb.IDBPDatabase>;
    protected _get<T>(storeOrStoreName: idb.IDBPObjectStore | string, keyArr: string[]): Promise<T>;
    clear(): Promise<void>;
    save<T extends PersistentModel>(model: T, condition?: ModelPredicate<T>): Promise<[T, OpType.INSERT | OpType.UPDATE][]>;
    query<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, predicate?: ModelPredicate<T>, pagination?: PaginationInput<T>): Promise<T[]>;
    queryOne<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, firstOrLast?: QueryOne): Promise<T | undefined>;
    batchSave<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<any>, items: ModelInstanceMetadata[]): Promise<[T, OpType][]>;
    protected deleteItem<T extends PersistentModel>(deleteQueue: {
        storeName: string;
        items: T[] | IDBValidKey[];
    }[]): Promise<void>;
    private checkPrivate;
    /**
     * Whether the browser's implementation of IndexedDB is coercing single-field
     * indexes to a scalar key.
     *
     * If this returns `true`, we need to treat indexes containing a single field
     * as scalars.
     *
     * See PR description for reference:
     * https://github.com/aws-amplify/amplify-js/pull/10527
     */
    private setSafariCompatabilityMode;
    private getNamespaceAndModelFromStorename;
    private createObjectStoreForModel;
    private getByKey;
    private getAll;
    /**
     * Tries to generate an index fetcher for the given predicates. Assumes
     * that the given predicate conditions are contained by an AND group and
     * should therefore all match a single record.
     *
     * @param storeName The table to query.
     * @param predicates The predicates to try to AND together.
     * @param transaction
     */
    private matchingIndexQueries;
    private baseQueryIndex;
    private filterOnPredicate;
    private inMemoryPagination;
    private enginePagination;
    /**
     * Checks the given path against the browser's IndexedDB implementation for
     * necessary compatibility transformations, applying those transforms if needed.
     *
     * @param `keyArr` strings to compatibilize for browser-indexeddb index operations
     * @returns An array or string, depending on and given key,
     * that is ensured to be compatible with the IndexedDB implementation's nuances.
     */
    private canonicalKeyPath;
}
declare const _default: IndexedDBAdapter;
export default _default;
