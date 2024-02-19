import AsyncStorageDatabase from './AsyncStorageDatabase';
import { ModelInstanceMetadata, ModelPredicate, OpType, PaginationInput, PersistentModel, PersistentModelConstructor, QueryOne } from '../../types';
import { StorageAdapterBase } from './StorageAdapterBase';
export declare class AsyncStorageAdapter extends StorageAdapterBase {
    protected db: AsyncStorageDatabase;
    protected preSetUpChecks(): Promise<void>;
    protected preOpCheck(): Promise<void>;
    /**
     * Open AsyncStorage database
     * Create new DB if one doesn't exist
     *
     * Called by `StorageAdapterBase.setUp()`
     *
     * @returns AsyncStorageDatabase instance
     */
    protected initDb(): Promise<AsyncStorageDatabase>;
    clear(): Promise<void>;
    batchSave<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<any>, items: ModelInstanceMetadata[]): Promise<[T, OpType][]>;
    protected _get<T>(storeName: string, keyArr: string[]): Promise<T>;
    save<T extends PersistentModel>(model: T, condition?: ModelPredicate<T>): Promise<[T, OpType.INSERT | OpType.UPDATE][]>;
    query<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, predicate?: ModelPredicate<T>, pagination?: PaginationInput<T>): Promise<T[]>;
    private getByKey;
    private getAll;
    private filterOnPredicate;
    private inMemoryPagination;
    queryOne<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, firstOrLast?: QueryOne): Promise<T | undefined>;
    protected deleteItem<T extends PersistentModel>(deleteQueue?: {
        storeName: string;
        items: T[] | IDBValidKey[];
    }[]): Promise<void>;
    /**
     * Retrieves concatenated primary key values from a model
     *
     * @param model
     * @returns
     */
    private getIndexKeyValuesPath;
}
declare const _default: AsyncStorageAdapter;
export default _default;
