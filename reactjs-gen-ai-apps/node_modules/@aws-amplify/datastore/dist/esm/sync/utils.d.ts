import { GraphQLAuthError } from '@aws-amplify/api';
import { GraphQLAuthMode } from '@aws-amplify/core/internals/utils';
import { ModelInstanceCreator } from '../datastore/datastore';
import { AuthorizationRule, GraphQLCondition, GraphQLFilter, ModelInstanceMetadata, OpType, PersistentModel, PersistentModelConstructor, PredicatesGroup, RelationshipType, SchemaModel, SchemaNamespace, SchemaNonModel, ModelOperation, InternalSchema, AuthModeStrategy } from '../types';
import { MutationEvent } from './';
declare enum GraphQLOperationType {
    LIST = "query",
    CREATE = "mutation",
    UPDATE = "mutation",
    DELETE = "mutation",
    GET = "query"
}
export declare enum TransformerMutationType {
    CREATE = "Create",
    UPDATE = "Update",
    DELETE = "Delete",
    GET = "Get"
}
export declare function getMetadataFields(): ReadonlyArray<string>;
export declare function generateSelectionSet(namespace: SchemaNamespace, modelDefinition: SchemaModel | SchemaNonModel): string;
export declare function getAuthorizationRules(modelDefinition: SchemaModel): AuthorizationRule[];
export declare function buildSubscriptionGraphQLOperation(namespace: SchemaNamespace, modelDefinition: SchemaModel, transformerMutationType: TransformerMutationType, isOwnerAuthorization: boolean, ownerField: string, filterArg?: boolean): [TransformerMutationType, string, string];
export declare function buildGraphQLOperation(namespace: SchemaNamespace, modelDefinition: SchemaModel, graphQLOpType: keyof typeof GraphQLOperationType): [TransformerMutationType, string, string][];
export declare function createMutationInstanceFromModelOperation<T extends PersistentModel>(relationships: RelationshipType, modelDefinition: SchemaModel, opType: OpType, model: PersistentModelConstructor<T>, element: T, condition: GraphQLCondition, MutationEventConstructor: PersistentModelConstructor<MutationEvent>, modelInstanceCreator: ModelInstanceCreator, id?: string): MutationEvent;
export declare function predicateToGraphQLCondition(predicate: PredicatesGroup<any>, modelDefinition: SchemaModel): GraphQLCondition;
/**
 * @param predicatesGroup - Predicate Group
    @returns GQL Filter Expression from Predicate Group
    
    @remarks Flattens redundant list predicates
    @example

    ```js
    { and:[{ and:[{ username:  { eq: 'bob' }}] }] }
    ```
    Becomes
    ```js
    { and:[{ username: { eq: 'bob' }}] }
    ```
    */
export declare function predicateToGraphQLFilter(predicatesGroup: PredicatesGroup<any>, fieldsToOmit?: string[], root?: boolean): GraphQLFilter;
/**
 *
 * @param group - selective sync predicate group
 * @returns set of distinct field names in the filter group
 */
export declare function filterFields(group?: PredicatesGroup<any>): Set<string>;
/**
 *
 * @param modelDefinition
 * @returns set of field names used with dynamic auth modes configured for the provided model definition
 */
export declare function dynamicAuthFields(modelDefinition: SchemaModel): Set<string>;
/**
 *
 * @param group - selective sync predicate group
 * @returns the total number of OR'd predicates in the filter group
 *
 * @example returns 2
 * ```js
 * { type: "or", predicates: [
 * { field: "username", operator: "beginsWith", operand: "a" },
 * { field: "title", operator: "contains", operand: "abc" },
 * ]}
 * ```
 */
export declare function countFilterCombinations(group?: PredicatesGroup<any>): number;
/**
 *
 * @param group - selective sync predicate group
 * @returns name of repeated field | null
 *
 * @example returns "username"
 * ```js
 * { type: "and", predicates: [
 * 		{ field: "username", operator: "beginsWith", operand: "a" },
 * 		{ field: "username", operator: "contains", operand: "abc" },
 * ] }
 * ```
 */
export declare function repeatedFieldInGroup(group?: PredicatesGroup<any>): string | null;
export declare enum RTFError {
    UnknownField = 0,
    MaxAttributes = 1,
    MaxCombinations = 2,
    RepeatedFieldname = 3,
    NotGroup = 4,
    FieldNotInType = 5
}
export declare function generateRTFRemediation(errorType: RTFError, modelDefinition: SchemaModel, predicatesGroup: PredicatesGroup<any> | undefined): string;
export declare function getUserGroupsFromToken(token: {
    [field: string]: any;
}, rule: AuthorizationRule): string[];
export declare function getModelAuthModes({ authModeStrategy, defaultAuthMode, modelName, schema, }: {
    authModeStrategy: AuthModeStrategy;
    defaultAuthMode: GraphQLAuthMode;
    modelName: string;
    schema: InternalSchema;
}): Promise<{
    [key in ModelOperation]: GraphQLAuthMode[];
}>;
export declare function getForbiddenError(error: any): any;
export declare function resolveServiceErrorStatusCode(error: unknown): number | null;
export declare function getClientSideAuthError(error: any): GraphQLAuthError;
export declare function getTokenForCustomAuth(authMode: GraphQLAuthMode, amplifyConfig?: Record<string, any>): Promise<string | undefined>;
export declare function getIdentifierValue(modelDefinition: SchemaModel, model: ModelInstanceMetadata | PersistentModel): string;
export {};
