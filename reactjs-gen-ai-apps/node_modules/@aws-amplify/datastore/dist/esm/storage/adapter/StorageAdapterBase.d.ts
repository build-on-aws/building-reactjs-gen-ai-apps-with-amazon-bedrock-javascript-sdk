import { Adapter } from './index';
import { ModelInstanceCreator } from '../../datastore/datastore';
import { InternalSchema, ModelInstanceMetadata, ModelPredicate, NamespaceResolver, OpType, PaginationInput, PersistentModel, PersistentModelConstructor, PredicatesGroup, QueryOne } from '../../types';
import { NAMESPACES } from '../../util';
import type { IDBPDatabase, IDBPObjectStore } from 'idb';
import type AsyncStorageDatabase from './AsyncStorageDatabase';
export declare abstract class StorageAdapterBase implements Adapter {
    protected schema: InternalSchema;
    protected namespaceResolver: NamespaceResolver;
    protected modelInstanceCreator: ModelInstanceCreator;
    protected getModelConstructorByModelName: (namsespaceName: NAMESPACES, modelName: string) => PersistentModelConstructor<any>;
    protected initPromise: Promise<void>;
    protected resolve: (value?: any) => void;
    protected reject: (value?: any) => void;
    protected dbName: string;
    protected abstract db: IDBPDatabase | AsyncStorageDatabase;
    protected abstract preSetUpChecks(): Promise<void>;
    protected abstract preOpCheck(): Promise<void>;
    protected abstract initDb(): Promise<IDBPDatabase | AsyncStorageDatabase>;
    /**
     * Initializes local DB
     *
     * @param theSchema
     * @param namespaceResolver
     * @param modelInstanceCreator
     * @param getModelConstructorByModelName
     * @param sessionId
     */
    setUp(theSchema: InternalSchema, namespaceResolver: NamespaceResolver, modelInstanceCreator: ModelInstanceCreator, getModelConstructorByModelName: (namsespaceName: NAMESPACES, modelName: string) => PersistentModelConstructor<any>, sessionId?: string): Promise<void>;
    abstract clear(): Promise<void>;
    abstract save<T extends PersistentModel>(model: T, condition?: ModelPredicate<T>): any;
    abstract query<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, predicate?: ModelPredicate<T>, pagination?: PaginationInput<T>): Promise<T[]>;
    abstract queryOne<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, firstOrLast: QueryOne): Promise<T | undefined>;
    abstract batchSave<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<any>, items: ModelInstanceMetadata[]): Promise<[T, OpType][]>;
    /**
     * @param modelConstructor
     * @returns local DB table name
     */
    protected getStorenameForModel(modelConstructor: PersistentModelConstructor<any>): string;
    /**
     *
     * @param model - instantiated model record
     * @returns the record's primary key values
     */
    protected getIndexKeyValuesFromModel<T extends PersistentModel>(model: T): string[];
    /**
     * Common metadata for `save` operation
     * used by individual storage adapters
     *
     * @param model
     */
    protected saveMetadata<T extends PersistentModel>(model: T): {
        storeName: string;
        set: Set<string>;
        connectionStoreNames: any;
        modelKeyValues: string[];
    };
    /**
     * Enforces conditional save. Throws if condition is not met.
     * used by individual storage adapters
     *
     * @param model
     */
    protected validateSaveCondition<T extends PersistentModel>(condition?: ModelPredicate<T>, fromDB?: unknown): void;
    protected abstract _get<T>(storeOrStoreName: IDBPObjectStore | string, keyArr: string[]): Promise<T>;
    /**
     * Instantiate models from POJO records returned from the database
     *
     * @param namespaceName - string model namespace
     * @param srcModelName - string model name
     * @param records - array of uninstantiated records
     * @returns
     */
    protected load<T>(namespaceName: NAMESPACES, srcModelName: string, records: T[]): Promise<T[]>;
    /**
     * Extracts operands from a predicate group into an array of key values
     * Used in the query method
     *
     * @param predicates - predicate group
     * @param keyPath - string array of key names ['id', 'sortKey']
     * @returns string[] of key values
     *
     * @example
     * ```js
     * { and:[{ id: { eq: 'abc' }}, { sortKey: { eq: 'def' }}] }
     * ```
     * Becomes
     * ```
     * ['abc', 'def']
     * ```
     */
    private keyValueFromPredicate;
    /**
     * Common metadata for `query` operation
     * used by individual storage adapters
     *
     * @param modelConstructor
     * @param predicate
     * @param pagination
     */
    protected queryMetadata<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, predicate?: ModelPredicate<T>, pagination?: PaginationInput<T>): {
        storeName: string;
        namespaceName: NAMESPACES;
        queryByKey: string[];
        predicates: PredicatesGroup<any>;
        hasSort: import("../../types").SortPredicate<T>;
        hasPagination: number;
    };
    /**
     * Delete record
     * Cascades to related records (for Has One and Has Many relationships)
     *
     * @param modelOrModelConstructor
     * @param condition
     * @returns
     */
    delete<T extends PersistentModel>(modelOrModelConstructor: T | PersistentModelConstructor<T>, condition?: ModelPredicate<T>): Promise<[T[], T[]]>;
    protected abstract deleteItem<T extends PersistentModel>(deleteQueue?: {
        storeName: string;
        items: T[] | IDBValidKey[];
    }[]): any;
    /**
     * Recursively traverse relationship graph and add
     * all Has One and Has Many relations to `deleteQueue` param
     *
     * Actual deletion of records added to `deleteQueue` occurs in the `delete` method
     *
     * @param models
     * @param modelConstructor
     * @param namespace
     * @param deleteQueue
     */
    private deleteTraverse;
}
