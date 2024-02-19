import { PersistentModel, ModelMeta, ModelPredicate as StoragePredicate, PredicateInternalsKey, V5ModelPredicate as ModelPredicate, RecursiveModelPredicate } from '../types';
import { ExclusiveStorage as StorageAdapter } from '../storage/storage';
type GroupOperator = 'and' | 'or' | 'not';
type UntypedCondition = {
    fetch: (storage: StorageAdapter) => Promise<Record<string, any>[]>;
    matches: (item: Record<string, any>) => Promise<boolean>;
    copy(extract?: GroupCondition): [UntypedCondition, GroupCondition | undefined];
    toAST(): any;
};
/**
 * Takes a key object from `registerPredicateInternals()` to fetch an internal
 * `GroupCondition` object, which can then be used to query storage or
 * test/match objects.
 *
 * This indirection exists to hide `GroupCondition` from public interfaces, since
 * `GroupCondition` contains extra methods and properties that public callers
 * should not use.
 *
 * @param key A key object previously returned by `registerPredicateInternals()`
 */
export declare const internals: (key: any) => GroupCondition;
/**
 * A condition that can operate against a single "primitive" field of a model or item.
 * @member field The field of *some record* to test against.
 * @member operator The equality or comparison operator to use.
 * @member operands The operands for the equality/comparison check.
 */
export declare class FieldCondition {
    field: string;
    operator: string;
    operands: string[];
    constructor(field: string, operator: string, operands: string[]);
    /**
     * Creates a copy of self.
     * @param extract Not used. Present only to fulfill the `UntypedCondition` interface.
     * @returns A new, identitical `FieldCondition`.
     */
    copy(extract?: GroupCondition): [FieldCondition, GroupCondition | undefined];
    /**
     * Produces a tree structure similar to a graphql condition. The returned
     * structure is "dumb" and is intended for another query/condition
     * generation mechanism to interpret, such as the cloud or storage query
     * builders.
     *
     * E.g.,
     *
     * ```json
     * {
     * 	"name": {
     * 		"eq": "robert"
     * 	}
     * }
     * ```
     */
    toAST(): {
        [x: string]: {
            [x: string]: string | string[];
        };
    };
    /**
     * Produces a new condition (`FieldCondition` or `GroupCondition`) that
     * matches the opposite of this condition.
     *
     * Intended to be used when applying De Morgan's Law, which can be done to
     * produce more efficient queries against the storage layer if a negation
     * appears in the query tree.
     *
     * For example:
     *
     * 1. `name.eq('robert')` becomes `name.ne('robert')`
     * 2. `price.between(100, 200)` becomes `m => m.or(m => [m.price.lt(100), m.price.gt(200)])`
     *
     * @param model The model meta to use when construction a new `GroupCondition`
     * for cases where the negation requires multiple `FieldCondition`'s.
     */
    negated(model: ModelMeta<any>): GroupCondition | FieldCondition;
    /**
     * Not implemented. Not needed. GroupCondition instead consumes FieldConditions and
     * transforms them into legacy predicates. (*For now.*)
     * @param storage N/A. If ever implemented, the storage adapter to query.
     * @returns N/A. If ever implemented, return items from `storage` that match.
     */
    fetch(storage: StorageAdapter): Promise<Record<string, any>[]>;
    /**
     * Determins whether a given item matches the expressed condition.
     * @param item The item to test.
     * @returns `Promise<boolean>`, `true` if matches; `false` otherwise.
     */
    matches(item: Record<string, any>): Promise<boolean>;
    /**
     * Checks `this.operands` for compatibility with `this.operator`.
     */
    validate(): void;
}
/**
 * A set of sub-conditions to operate against a model, optionally scoped to
 * a specific field, combined with the given operator (one of `and`, `or`, or `not`).
 * @member groupId Used to distinguish between GroupCondition instances for
 * debugging and troublehsooting.
 * @member model A metadata object that tells GroupCondition what to query and how.
 * @member field The field on the model that the sub-conditions apply to.
 * @member operator How to group child conditions together.
 * @member operands The child conditions.
 */
export declare class GroupCondition {
    /**
     * The `ModelMeta` of the model to query and/or filter against.
     * Expected to contain:
     *
     * ```js
     * {
     * 	builder: ModelConstructor,
     * 	schema: SchemaModel,
     * 	pkField: string[]
     * }
     * ```
     */
    model: ModelMeta<any>;
    /**
     * If populated, this group specifices a condition on a relationship.
     *
     * If `field` does *not* point to a related model, that's an error. It
     * could indicate that the `GroupCondition` was instantiated with bad
     * data, or that the model metadata is incorrect.
     */
    field: string | undefined;
    /**
     * If a `field` is given, whether the relationship is a `HAS_ONE`,
     * 'HAS_MANY`, or `BELONGS_TO`.
     *
     * TODO: Remove this and replace with derivation using
     * `ModelRelationship.from(this.model, this.field).relationship`;
     */
    relationshipType: string | undefined;
    /**
     *
     */
    operator: GroupOperator;
    /**
     *
     */
    operands: UntypedCondition[];
    /**
     * Whether this GroupCondition is the result of an optimize call.
     *
     * This is used to guard against infinitely fetch -> optimize -> fetch
     * recursion.
     */
    isOptimized: boolean;
    groupId: string;
    constructor(
    /**
     * The `ModelMeta` of the model to query and/or filter against.
     * Expected to contain:
     *
     * ```js
     * {
     * 	builder: ModelConstructor,
     * 	schema: SchemaModel,
     * 	pkField: string[]
     * }
     * ```
     */
    model: ModelMeta<any>, 
    /**
     * If populated, this group specifices a condition on a relationship.
     *
     * If `field` does *not* point to a related model, that's an error. It
     * could indicate that the `GroupCondition` was instantiated with bad
     * data, or that the model metadata is incorrect.
     */
    field: string | undefined, 
    /**
     * If a `field` is given, whether the relationship is a `HAS_ONE`,
     * 'HAS_MANY`, or `BELONGS_TO`.
     *
     * TODO: Remove this and replace with derivation using
     * `ModelRelationship.from(this.model, this.field).relationship`;
     */
    relationshipType: string | undefined, 
    /**
     *
     */
    operator: GroupOperator, 
    /**
     *
     */
    operands: UntypedCondition[], 
    /**
     * Whether this GroupCondition is the result of an optimize call.
     *
     * This is used to guard against infinitely fetch -> optimize -> fetch
     * recursion.
     */
    isOptimized?: boolean);
    /**
     * Returns a copy of a GroupCondition, which also returns the copy of a
     * given reference node to "extract".
     * @param extract A node of interest. Its copy will *also* be returned if the node exists.
     * @returns [The full copy, the copy of `extract` | undefined]
     */
    copy(extract?: GroupCondition): [GroupCondition, GroupCondition | undefined];
    /**
     * Creates a new `GroupCondition` that contains only the local field conditions,
     * omitting related model conditions. That resulting `GroupCondition` can be
     * used to produce predicates that are compatible with the storage adapters and
     * Cloud storage.
     *
     * @param negate Whether the condition tree should be negated according
     * to De Morgan's law.
     */
    withFieldConditionsOnly(negate: boolean): GroupCondition;
    /**
     * Returns a version of the predicate tree with unnecessary logical groups
     * condensed and merged together. This is intended to create a dense tree
     * with leaf nodes (`FieldCondition`'s) aggregated under as few group conditions
     * as possible for the most efficient fetching possible -- it allows `fetch()`.
     *
     * E.g. a grouping like this:
     *
     * ```yaml
     * and:
     * 	and:
     * 		id:
     * 			eq: "abc"
     * 	and:
     * 		name:
     * 			eq: "xyz"
     * ```
     *
     * Will become this:
     *
     * ```yaml
     * and:
     * 	id:
     * 		eq: "abc"
     * 	name:
     * 		eq: "xyz"
     * ```
     *
     * This allows `fetch()` to pass both the `id` and `name` conditions to the adapter
     * together, which can then decide what index to use based on both fields together.
     *
     * @param preserveNode Whether to preserve the current node and to explicitly not eliminate
     * it during optimization. Used internally to preserve the root node and children of
     * `not` groups. `not` groups will always have a single child, so there's nothing to
     * optimize below a `not` (for now), and it makes the query logic simpler later.
     */
    optimized(preserveNode?: boolean): UntypedCondition;
    /**
     * Fetches matching records from a given storage adapter using legacy predicates (for now).
     * @param storage The storage adapter this predicate will query against.
     * @param breadcrumb For debugging/troubleshooting. A list of the `groupId`'s this
     * GroupdCondition.fetch is nested within.
     * @param negate Whether to match on the `NOT` of `this`.
     * @returns An `Promise` of `any[]` from `storage` matching the child conditions.
     */
    fetch(storage: StorageAdapter, breadcrumb?: string[], negate?: boolean): Promise<Record<string, any>[]>;
    /**
     * Determines whether a single item matches the conditions of `this`.
     * When checking the target `item`'s properties, each property will be `await`'d
     * to ensure lazy-loading is respected where applicable.
     * @param item The item to match against.
     * @param ignoreFieldName Tells `match()` that the field name has already been dereferenced.
     * (Used for iterating over children on HAS_MANY checks.)
     * @returns A boolean (promise): `true` if matched, `false` otherwise.
     */
    matches(item: Record<string, any>, ignoreFieldName?: boolean): Promise<boolean>;
    /**
     * Tranfsorm to a AppSync GraphQL compatible AST.
     * (Does not support filtering in nested types.)
     */
    toAST(): {
        [x: string]: any[];
    };
    /**
     * Turn this predicate group into something a storage adapter
     * understands how to use.
     */
    toStoragePredicate<T>(): StoragePredicate<T>;
    /**
     * A JSON representation that's good for debugging.
     */
    toJSON(): this & {
        model: string;
    };
}
/**
 * Creates a "seed" predicate that can be used to build an executable condition.
 * This is used in `query()`, for example, to seed customer- E.g.,
 *
 * ```
 * const p = predicateFor({builder: modelConstructor, schema: modelSchema, pkField: string[]});
 * p.and(child => [
 *   child.field.eq('whatever'),
 *   child.childModel.childField.eq('whatever else'),
 *   child.childModel.or(child => [
 *     child.otherField.contains('x'),
 *     child.otherField.contains('y'),
 *     child.otherField.contains('z'),
 *   ])
 * ])
 * ```
 *
 * `predicateFor()` returns objecst with recursive getters. To facilitate this,
 * a `query` and `tail` can be provided to "accumulate" nested conditions.
 *
 * @param ModelType The ModelMeta used to build child properties.
 * @param field Scopes the query branch to a field.
 * @param query A base query to build on. Omit to start a new query.
 * @param tail The point in an existing `query` to attach new conditions to.
 * @returns A ModelPredicate (builder) that customers can create queries with.
 * (As shown in function description.)
 */
export declare function recursivePredicateFor<T extends PersistentModel>(ModelType: ModelMeta<T>, allowRecursion?: boolean, field?: string, query?: GroupCondition, tail?: GroupCondition): RecursiveModelPredicate<T> & PredicateInternalsKey;
export declare function predicateFor<T extends PersistentModel>(ModelType: ModelMeta<T>): ModelPredicate<T> & PredicateInternalsKey;
export {};
