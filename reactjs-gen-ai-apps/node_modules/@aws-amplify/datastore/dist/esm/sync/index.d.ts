import { Observable } from 'rxjs';
import { ModelInstanceCreator } from '../datastore/datastore';
import { ExclusiveStorage as Storage } from '../storage/storage';
import { ConflictHandler, ControlMessageType, ErrorHandler, InternalSchema, ModelInit, MutableModel, NamespaceResolver, PersistentModelConstructor, SchemaModel, SchemaNamespace, TypeConstructorMap, ModelPredicate, AuthModeStrategy, ManagedIdentifier, OptionallyManagedIdentifier, AmplifyContext } from '../types';
import type { __modelMeta__ } from '../types';
import DataStoreConnectivity from './datastoreConnectivity';
import { TransformerMutationType } from './utils';
type StartParams = {
    fullSyncInterval: number;
};
export declare class MutationEvent {
    readonly [__modelMeta__]: {
        identifier: OptionallyManagedIdentifier<MutationEvent, 'id'>;
    };
    readonly id: string;
    readonly model: string;
    readonly operation: TransformerMutationType;
    readonly modelId: string;
    readonly condition: string;
    readonly data: string;
    constructor(init: ModelInit<MutationEvent>);
    static copyOf(src: MutationEvent, mutator: (draft: MutableModel<MutationEvent>) => void | MutationEvent): MutationEvent;
}
export declare class ModelMetadata {
    readonly [__modelMeta__]: {
        identifier: ManagedIdentifier<ModelMetadata, 'id'>;
    };
    readonly id: string;
    readonly namespace: string;
    readonly model: string;
    readonly fullSyncInterval: number;
    readonly lastSync?: number;
    readonly lastFullSync?: number;
    readonly lastSyncPredicate?: null | string;
    constructor(init: ModelInit<ModelMetadata>);
    static copyOf(src: ModelMetadata, mutator: (draft: MutableModel<ModelMetadata>) => void | ModelMetadata): ModelMetadata;
}
export declare enum ControlMessage {
    SYNC_ENGINE_STORAGE_SUBSCRIBED = "storageSubscribed",
    SYNC_ENGINE_SUBSCRIPTIONS_ESTABLISHED = "subscriptionsEstablished",
    SYNC_ENGINE_SYNC_QUERIES_STARTED = "syncQueriesStarted",
    SYNC_ENGINE_SYNC_QUERIES_READY = "syncQueriesReady",
    SYNC_ENGINE_MODEL_SYNCED = "modelSynced",
    SYNC_ENGINE_OUTBOX_MUTATION_ENQUEUED = "outboxMutationEnqueued",
    SYNC_ENGINE_OUTBOX_MUTATION_PROCESSED = "outboxMutationProcessed",
    SYNC_ENGINE_OUTBOX_STATUS = "outboxStatus",
    SYNC_ENGINE_NETWORK_STATUS = "networkStatus",
    SYNC_ENGINE_READY = "ready"
}
export declare class SyncEngine {
    private readonly schema;
    private readonly namespaceResolver;
    private readonly modelClasses;
    private readonly userModelClasses;
    private readonly storage;
    private readonly modelInstanceCreator;
    private readonly syncPredicates;
    private readonly amplifyConfig;
    private readonly authModeStrategy;
    private readonly amplifyContext;
    private readonly connectivityMonitor?;
    private online;
    private readonly syncQueriesProcessor;
    private readonly subscriptionsProcessor;
    private readonly mutationsProcessor;
    private readonly modelMerger;
    private readonly outbox;
    private readonly datastoreConnectivity;
    private readonly modelSyncedStatus;
    private unsleepSyncQueriesObservable;
    private waitForSleepState;
    private syncQueriesObservableStartSleeping;
    private stopDisruptionListener;
    private connectionDisrupted;
    private runningProcesses;
    getModelSyncedStatus(modelConstructor: PersistentModelConstructor<any>): boolean;
    constructor(schema: InternalSchema, namespaceResolver: NamespaceResolver, modelClasses: TypeConstructorMap, userModelClasses: TypeConstructorMap, storage: Storage, modelInstanceCreator: ModelInstanceCreator, conflictHandler: ConflictHandler, errorHandler: ErrorHandler, syncPredicates: WeakMap<SchemaModel, ModelPredicate<any> | null>, amplifyConfig: Record<string, any>, authModeStrategy: AuthModeStrategy, amplifyContext: AmplifyContext, connectivityMonitor?: DataStoreConnectivity);
    start(params: StartParams): Observable<ControlMessageType<ControlMessage>>;
    private getModelsMetadataWithNextFullSync;
    private syncQueriesObservable;
    private disconnectionHandler;
    unsubscribeConnectivity(): void;
    /**
     * Stops all subscription activities and resolves when all activies report
     * that they're disconnected, done retrying, etc..
     */
    stop(): Promise<void>;
    private setupModels;
    private getModelsMetadata;
    private getModelMetadata;
    private getModelDefinition;
    static getNamespace(): SchemaNamespace;
    /**
     * listen for websocket connection disruption
     *
     * May indicate there was a period of time where messages
     * from AppSync were missed. A sync needs to be triggered to
     * retrieve the missed data.
     */
    private startDisruptionListener;
    private scheduleSync;
}
export {};
