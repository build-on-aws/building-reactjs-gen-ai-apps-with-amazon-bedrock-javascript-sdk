import { ModelPredicate, PersistentModel, PredicatesGroup, SchemaModel } from '../types';
export { ModelSortPredicateCreator } from './sort';
export declare function isPredicatesAll(predicate: any): predicate is typeof PredicateAll;
/**
 * The valid comparison operators that can be used as keys in a predicate comparison object.
 */
export declare const comparisonKeys: Set<string>;
export declare const PredicateAll: unique symbol;
export declare class Predicates {
    static get ALL(): typeof PredicateAll;
}
export declare class ModelPredicateCreator {
    /**
     * Map of storage predicates (key objects) to storage predicate AST's.
     */
    private static predicateGroupsMap;
    /**
     * Determines whether the given storage predicate (lookup key) is a predicate
     * key that DataStore recognizes.
     *
     * @param predicate The storage predicate (lookup key) to test.
     */
    static isValidPredicate<T extends PersistentModel>(predicate: any): predicate is ModelPredicate<T>;
    /**
     * Looks for the storage predicate AST that corresponds to a given storage
     * predicate key.
     *
     * The key must have been created internally by a DataStore utility
     * method, such as `ModelPredicate.createFromAST()`.
     *
     * @param predicate The predicate reference to look up.
     * @param throwOnInvalid Whether to throw an exception if the predicate
     * isn't a valid DataStore predicate.
     */
    static getPredicates<T extends PersistentModel>(predicate: ModelPredicate<T>, throwOnInvalid?: boolean): PredicatesGroup<any>;
    /**
     * using the PK values from the given `model` (which can be a partial of T
     * Creates a predicate that matches an instance described by `modelDefinition`
     * that contains only PK field values.)
     *
     * @param modelDefinition The model definition to create a predicate for.
     * @param model The model instance to extract value equalities from.
     */
    static createForPk<T extends PersistentModel>(modelDefinition: SchemaModel, model: T): ModelPredicate<T>;
    /**
     * Searches a `Model` table for records matching the given equalities object.
     *
     * This only matches against fields given in the equalities object. No other
     * fields are tested by the predicate.
     *
     * @param modelDefinition The model we need a predicate for.
     * @param flatEqualities An object holding field equalities to search for.
     */
    static createFromFlatEqualities<T extends PersistentModel>(modelDefinition: SchemaModel, flatEqualities: Record<string, any>): ModelPredicate<T>;
    /**
     * Accepts a GraphQL style filter predicate tree and transforms it into an
     * AST that can be used for a storage adapter predicate. Example input:
     *
     * ```js
     * {
     * 	and: [
     * 		{ name: { eq: "Bob Jones" } },
     * 		{ age: { between: [32, 64] } },
     * 		{ not: {
     * 			or: [
     * 				{ favoriteFood: { eq: 'pizza' } },
     * 				{ favoriteFood: { eq: 'tacos' } },
     * 			]
     * 		}}
     * 	]
     * }
     * ```
     *
     * @param gql GraphQL style filter node.
     */
    static transformGraphQLFilterNodeToPredicateAST(gql: any): any;
    /**
     * Accepts a GraphQL style filter predicate tree and transforms it into a predicate
     * that storage adapters understand. Example input:
     *
     * ```js
     * {
     * 	and: [
     * 		{ name: { eq: "Bob Jones" } },
     * 		{ age: { between: [32, 64] } },
     * 		{ not: {
     * 			or: [
     * 				{ favoriteFood: { eq: 'pizza' } },
     * 				{ favoriteFood: { eq: 'tacos' } },
     * 			]
     * 		}}
     * 	]
     * }
     * ```
     *
     * @param modelDefinition The model that the AST/predicate must be compatible with.
     * @param ast The graphQL style AST that should specify conditions for `modelDefinition`.
     */
    static createFromAST<T extends PersistentModel>(modelDefinition: SchemaModel, ast: any): ModelPredicate<T>;
}
