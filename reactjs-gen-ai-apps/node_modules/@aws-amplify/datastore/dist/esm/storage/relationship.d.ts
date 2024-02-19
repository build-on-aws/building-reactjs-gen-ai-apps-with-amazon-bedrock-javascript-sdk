import { ModelMeta } from '../types';
/**
 * Defines a relationship from a LOCAL model.field to a REMOTE model.field and helps
 * navigate the relationship, providing a simplified peek at the relationship details
 * pertinent to setting FK's and constructing join conditions.
 *
 * Because I mean, relationships are tough.
 *
 */
export declare class ModelRelationship<T> {
    private localModel;
    private _field;
    /**
     * @param modelDefinition The "local" model.
     * @param field The "local" model field.
     */
    constructor(model: ModelMeta<T>, field: string);
    /**
     * Returns a ModelRelationship for the the given model and field if the pair
     * indicates a relationship to another model. Else, returns `null`.
     *
     * @param model The model the relationship field exists in.
     * @param field The field that may relates the local model to the remote model.
     */
    static from<T>(model: ModelMeta<T>, field: string): ModelRelationship<T>;
    /**
     * Enumerates all valid `ModelRelationship`'s on the given model.
     *
     * @param model The model definition to enumerate relationships of.
     */
    static allFrom<T>(model: ModelMeta<T>): ModelRelationship<T>[];
    private get localDefinition();
    /**
     * The virtual/computed field on the local model that should contain
     * the related model.
     */
    get field(): string;
    /**
     * The constructor that can be used to query DataStore or create instance for
     * the local model.
     */
    get localConstructor(): import("../types").PersistentModelConstructor<T>;
    /**
     * The name/type of the relationship the local model has with the remote model
     * via the defined local model field.
     */
    get type(): "HAS_MANY" | "HAS_ONE" | "BELONGS_TO";
    /**
     * Raw details about the local FK as-is from the local model's field definition in
     * the schema. This field requires interpretation.
     *
     * @see localJoinFields
     * @see localAssociatedWith
     */
    private get localAssocation();
    /**
     * The field names on the local model that can be used to query or queried to match
     * with instances of the remote model.
     *
     * Fields are returned in-order to match the order of `this.remoteKeyFields`.
     */
    get localJoinFields(): string[];
    /**
     * The field names on the local model that uniquely identify it.
     *
     * These fields may or may not be relevant to the join fields.
     */
    get localPKFields(): string[];
    get remoteDefinition(): import("../types").SchemaModel;
    private get remoteModelType();
    /**
     * Constructor that can be used to query DataStore or create instances for
     * the remote model.
     */
    get remoteModelConstructor(): import("../types").PersistentModelConstructor<Readonly<Record<string, any>>>;
    /**
     * The field names on the remote model that uniquely identify it.
     *
     * These fields may or may not be relevant to the join fields.
     */
    get remotePKFields(): string[];
    /**
     * The `associatedWith` fields from the local perspective.
     *
     * When present, these fields indicate which fields on the remote model to use
     * when looking for a remote association and/or determining the final remote
     * key fields.
     */
    private get localAssociatedWith();
    /**
     * The `remote` model's associated field's `assocation` metadata, if
     * present.
     *
     * This is used when determining if the remote model's associated field
     * specifies which FK fields to use. If this value is `undefined`, the
     * name of the remote field (`this.localAssociatedWith`) *is* the remote
     * key field.
     */
    private get explicitRemoteAssociation();
    /**
     * The field names on the remote model that can used to query or queried to match
     * with instances of the local model.
     *
     * Fields are returned in-order to match the order of `this.localKeyFields`.
     */
    get remoteJoinFields(): string[];
    /**
     * Whether this relationship everything necessary to get, set, and query from
     * the perspective of the local model provided at instantiation.
     */
    get isComplete(): boolean;
    /**
     * Creates an FK mapper object with respect to the given related instance.
     *
     * E.g., if the local FK fields are `[parentId, parentName]` and point to
     * `[customId, name]` on the remote model, `createLocalFKObject(remote)`
     * will return:
     *
     * ```
     * {
     * 	parentId: remote.customId,
     * 	parentName: remote.name
     * }
     * ```
     *
     * @param remote The remote related instance.
     */
    createLocalFKObject(remote: any): Record<string, string>;
    /**
     * Creates an query mapper object to help fetch the remote instance(s) or
     * `null` if any of the necessary local fields are `null` or `undefined`.
     *
     * E.g., if the local FK fields are `[parentId, parentName]` and point to
     * `[customId, name]` on the remote model, `createLocalFKObject(remote)`
     * will return:
     *
     * ```
     * {
     * 	customId: local.parentId
     * 	name: local.parentName
     * }
     * ```
     *
     * If the local fields are not populated, returns
     *
     * @param local The local instance.
     */
    createRemoteQueryObject(local: T): Record<string, string>;
}
