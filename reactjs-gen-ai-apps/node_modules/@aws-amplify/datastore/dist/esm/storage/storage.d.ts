import { Observable } from 'rxjs';
import { Patch } from 'immer';
import { ModelInstanceCreator } from '../datastore/datastore';
import { InternalSchema, ModelInstanceMetadata, ModelPredicate, NamespaceResolver, OpType, PaginationInput, PersistentModel, PersistentModelConstructor, QueryOne, SchemaNamespace, InternalSubscriptionMessage, SubscriptionMessage } from '../types';
import { NAMESPACES } from '../util';
import { Adapter } from './adapter';
export type StorageSubscriptionMessage<T extends PersistentModel> = InternalSubscriptionMessage<T> & {
    mutator?: Symbol;
};
export type StorageFacade = Omit<Adapter, 'setUp'>;
export type Storage = InstanceType<typeof StorageClass>;
declare class StorageClass implements StorageFacade {
    private readonly schema;
    private readonly namespaceResolver;
    private readonly getModelConstructorByModelName;
    private readonly modelInstanceCreator;
    private readonly adapter?;
    private readonly sessionId?;
    private initialized;
    private readonly pushStream;
    constructor(schema: InternalSchema, namespaceResolver: NamespaceResolver, getModelConstructorByModelName: (namsespaceName: NAMESPACES, modelName: string) => PersistentModelConstructor<any>, modelInstanceCreator: ModelInstanceCreator, adapter?: Adapter, sessionId?: string);
    static getNamespace(): SchemaNamespace;
    init(): Promise<void>;
    save<T extends PersistentModel>(model: T, condition?: ModelPredicate<T>, mutator?: Symbol, patchesTuple?: [Patch[], PersistentModel]): Promise<[T, OpType.INSERT | OpType.UPDATE][]>;
    delete<T extends PersistentModel>(model: T, condition?: ModelPredicate<T>, mutator?: Symbol): Promise<[T[], T[]]>;
    delete<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, condition?: ModelPredicate<T>, mutator?: Symbol): Promise<[T[], T[]]>;
    query<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, predicate?: ModelPredicate<T>, pagination?: PaginationInput<T>): Promise<T[]>;
    queryOne<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, firstOrLast?: QueryOne): Promise<T | undefined>;
    observe<T extends PersistentModel>(modelConstructor?: PersistentModelConstructor<T> | null, predicate?: ModelPredicate<T> | null, skipOwn?: Symbol): Observable<SubscriptionMessage<T>>;
    clear(completeObservable?: boolean): Promise<void>;
    batchSave<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<any>, items: ModelInstanceMetadata[], mutator?: Symbol): Promise<[T, OpType][]>;
    private getChangedFieldsInput;
}
declare class ExclusiveStorage implements StorageFacade {
    private storage;
    private readonly mutex;
    constructor(schema: InternalSchema, namespaceResolver: NamespaceResolver, getModelConstructorByModelName: (namsespaceName: NAMESPACES, modelName: string) => PersistentModelConstructor<any>, modelInstanceCreator: ModelInstanceCreator, adapter?: Adapter, sessionId?: string);
    runExclusive<T>(fn: (storage: StorageClass) => Promise<T>): Promise<T>;
    save<T extends PersistentModel>(model: T, condition?: ModelPredicate<T>, mutator?: Symbol, patchesTuple?: [Patch[], PersistentModel]): Promise<[T, OpType.INSERT | OpType.UPDATE][]>;
    delete<T extends PersistentModel>(model: T, condition?: ModelPredicate<T>, mutator?: Symbol): Promise<[T[], T[]]>;
    delete<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, condition?: ModelPredicate<T>, mutator?: Symbol): Promise<[T[], T[]]>;
    query<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, predicate?: ModelPredicate<T>, pagination?: PaginationInput<T>): Promise<T[]>;
    queryOne<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, firstOrLast?: QueryOne): Promise<T | undefined>;
    static getNamespace(): SchemaNamespace;
    observe<T extends PersistentModel>(modelConstructor?: PersistentModelConstructor<T> | null, predicate?: ModelPredicate<T> | null, skipOwn?: Symbol): Observable<SubscriptionMessage<T>>;
    clear(): Promise<void>;
    batchSave<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, items: ModelInstanceMetadata[]): Promise<[T, OpType][]>;
    init(): Promise<void>;
}
export { ExclusiveStorage };
