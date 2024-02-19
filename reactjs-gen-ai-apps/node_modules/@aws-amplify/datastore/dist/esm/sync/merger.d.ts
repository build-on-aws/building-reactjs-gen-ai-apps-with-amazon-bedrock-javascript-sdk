import { Storage } from '../storage/storage';
import { ModelInstanceMetadata, OpType, PersistentModelConstructor, SchemaModel } from '../types';
import { MutationEventOutbox } from './outbox';
declare class ModelMerger {
    private readonly outbox;
    private readonly ownSymbol;
    constructor(outbox: MutationEventOutbox, ownSymbol: Symbol);
    /**
     *
     * @param storage Storage adapter that contains the data.
     * @param model The model from an outbox mutation.
     * @returns The type of operation (INSERT/UPDATE/DELETE)
     */
    merge<T extends ModelInstanceMetadata>(storage: Storage, model: T, modelDefinition: SchemaModel): Promise<OpType>;
    mergePage(storage: Storage, modelConstructor: PersistentModelConstructor<any>, items: ModelInstanceMetadata[], modelDefinition: SchemaModel): Promise<[ModelInstanceMetadata, OpType][]>;
}
export { ModelMerger };
