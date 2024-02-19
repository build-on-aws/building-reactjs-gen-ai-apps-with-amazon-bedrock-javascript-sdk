import { Observable } from 'rxjs';
import { PredicateAll } from '../predicates';
import { ConflictHandler, DataStoreConfig, ProducerPaginationInput, PersistentModel, PersistentModelConstructor, Schema, SubscriptionMessage, DataStoreSnapshot, TypeConstructorMap, ErrorHandler, ObserveQueryOptions, PersistentModelMetaData, IdentifierFieldOrIdentifierObject, RecursiveModelPredicateExtender, ModelPredicateExtender } from '../types';
export declare let syncClasses: TypeConstructorMap;
/**
 * Describes whether and to what a model is attached for lazy loading purposes.
 */
declare enum ModelAttachment {
    /**
     * Model doesn't lazy load from any data source.
     *
     * Related entity properties provided at instantiation are returned
     * via the respective lazy interfaces when their properties are invoked.
     */
    Detached = "Detached",
    /**
     * Model lazy loads from the global DataStore.
     */
    DataStore = "DataStore",
    /**
     * Demonstrative. Not yet implemented.
     */
    API = "API"
}
/**
 * Registers a model instance against a data source (DataStore, API, or
 * Detached/None).
 *
 * The API option is demonstrative. Lazy loading against API is not yet
 * implemented.
 *
 * @param result A model instance or array of instances
 * @param attachment A ModelAttachment data source
 * @returns passes the `result` back through after attachment
 */
export declare function attached<T extends PersistentModel | PersistentModel[]>(result: T, attachment: ModelAttachment): T;
/**
 * Determines what source a model instance should lazy load from.
 *
 * If the instace was never explicitly registered, it is detached by default.
 *
 * @param instance A model instance
 */
export declare const getAttachment: (instance: PersistentModel) => ModelAttachment;
declare const initSchema: (userSchema: Schema) => TypeConstructorMap;
/**
 * Constructs a model and records it with its metadata in a weakset. Allows for
 * the separate storage of core model fields and Amplify/DataStore metadata
 * fields that the customer app does not want exposed.
 *
 * @param modelConstructor The model constructor.
 * @param init Init data that would normally be passed to the constructor.
 * @returns The initialized model.
 */
export declare type ModelInstanceCreator = typeof modelInstanceCreator;
declare function modelInstanceCreator<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, init: Partial<T>): T;
/**
 * An eventually loaded related model instance.
 */
export declare class AsyncItem<T> extends Promise<T> {
}
/**
 * A collection of related model instances.
 *
 * This collection can be async-iterated or turned directly into an array using `toArray()`.
 */
export declare class AsyncCollection<T> implements AsyncIterable<T> {
    private values;
    constructor(values: Array<any> | Promise<Array<any>>);
    /**
     * Facilitates async iteration.
     *
     * ```ts
     * for await (const item of collection) {
     *   handle(item)
     * }
     * ```
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
     */
    [Symbol.asyncIterator](): AsyncIterator<T>;
    /**
     * Turns the collection into an array, up to the amount specified in `max` param.
     *
     * ```ts
     * const all = await collection.toArray();
     * const first100 = await collection.toArray({max: 100});
     * ```
     */
    toArray({ max, }?: {
        max?: number;
    }): Promise<T[]>;
}
declare class DataStore {
    private InternalAPI;
    private Cache;
    private amplifyConfig;
    private authModeStrategy;
    private conflictHandler;
    private errorHandler;
    private fullSyncInterval;
    private initialized?;
    private initReject;
    private initResolve;
    private maxRecordsToSync;
    private storage?;
    private sync?;
    private syncPageSize;
    private syncExpressions;
    private syncPredicates;
    private sessionId?;
    private storageAdapter;
    private amplifyContext;
    private connectivityMonitor?;
    /**
     * **IMPORTANT!**
     *
     * Accumulator for background things that can **and MUST** be called when
     * DataStore stops.
     *
     * These jobs **MUST** be *idempotent promises* that resolve ONLY
     * once the intended jobs are completely finished and/or otherwise destroyed
     * and cleaned up with ZERO outstanding:
     *
     * 1. side effects (e.g., state changes)
     * 1. callbacks
     * 1. subscriptions
     * 1. calls to storage
     * 1. *etc.*
     *
     * Methods that create pending promises, subscriptions, callbacks, or any
     * type of side effect **MUST** be registered with the manager. And, a new
     * manager must be created after each `exit()`.
     *
     * Failure to comply will put DataStore into a highly unpredictable state
     * when it needs to stop or clear -- which occurs when restarting with new
     * sync expressions, during testing, and potentially during app code
     * recovery handling, etc..
     *
     * It is up to the discretion of each disposer whether to wait for job
     * completion or to cancel operations and issue failures *as long as the
     * disposer returns in a reasonable amount of time.*
     *
     * (Reasonable = *seconds*, not minutes.)
     */
    private runningProcesses;
    /**
     * Indicates what state DataStore is in.
     *
     * Not [yet?] used for actual state management; but for messaging
     * when errors occur, to help troubleshoot.
     */
    private state;
    getModuleName(): string;
    /**
     * Builds a function to capture `BackgroundManagerNotOpenError`'s to produce friendlier,
     * more instructive errors for customers.
     *
     * @param operation The name of the operation (usually a Datastore method) the customer
     * tried to call.
     */
    handleAddProcError(operation: string): (err: Error) => never;
    /**
     * If not already done:
     * 1. Attaches and initializes storage.
     * 2. Loads the schema and records metadata.
     * 3. If `this.amplifyConfig.aws_appsync_graphqlEndpoint` contains a URL,
     * attaches a sync engine, starts it, and subscribes.
     */
    start: () => Promise<void>;
    query: {
        <T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, identifier: IdentifierFieldOrIdentifierObject<T, PersistentModelMetaData<T>>): Promise<T | undefined>;
        <T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, criteria?: RecursiveModelPredicateExtender<T> | typeof PredicateAll | null, paginationProducer?: ProducerPaginationInput<T>): Promise<T[]>;
    };
    save: <T extends Readonly<Record<string, any>>>(model: T, condition?: ModelPredicateExtender<T>) => Promise<T>;
    setConflictHandler: (config: DataStoreConfig) => ConflictHandler;
    setErrorHandler: (config: DataStoreConfig) => ErrorHandler;
    delete: {
        <T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, identifier: IdentifierFieldOrIdentifierObject<T, PersistentModelMetaData<T>>): Promise<T[]>;
        <T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, condition: ModelPredicateExtender<T> | typeof PredicateAll): Promise<T[]>;
        <T extends PersistentModel>(model: T, condition?: ModelPredicateExtender<T>): Promise<T>;
    };
    observe: {
        (): Observable<SubscriptionMessage<PersistentModel>>;
        <T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, identifier: string): Observable<SubscriptionMessage<T>>;
        <T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, criteria?: RecursiveModelPredicateExtender<T> | typeof PredicateAll): Observable<SubscriptionMessage<T>>;
        <T extends PersistentModel>(model: T): Observable<SubscriptionMessage<T>>;
    };
    observeQuery: {
        <T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, criteria?: RecursiveModelPredicateExtender<T> | typeof PredicateAll, paginationProducer?: ObserveQueryOptions<T>): Observable<DataStoreSnapshot<T>>;
    };
    configure: (config?: DataStoreConfig) => void;
    /**
     * Clears all data from storage and removes all data, schema info, other
     * initialization details, and then stops DataStore.
     *
     * That said, reinitialization is required after clearing. This can be done
     * by explicitiliy calling `start()` or any method that implicitly starts
     * DataStore, such as `query()`, `save()`, or `delete()`.
     */
    clear(): Promise<void>;
    /**
     * Stops all DataStore sync activities.
     *
     * TODO: "Waits for graceful termination of
     * running queries and terminates subscriptions."
     */
    stop(this: InstanceType<typeof DataStore>): Promise<void>;
    /**
     * Validates given pagination input from a query and creates a pagination
     * argument for use against the storage layer.
     *
     * @param modelDefinition
     * @param paginationProducer
     */
    private processPagination;
    /**
     * Examines the configured `syncExpressions` and produces a WeakMap of
     * SchemaModel -> predicate to use during sync.
     */
    private processSyncExpressions;
    private unwrapPromise;
    private weakMapFromEntries;
    /**
     * A session ID to allow CMS to open databases against multiple apps.
     * This session ID is only expected be set by AWS Amplify Studio.
     */
    private retrieveSessionId;
}
declare const instance: DataStore;
export { DataStore as DataStoreClass, initSchema, instance as DataStore };
