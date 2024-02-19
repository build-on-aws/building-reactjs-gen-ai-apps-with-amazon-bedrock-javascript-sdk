export { DataStore, DataStoreClass, initSchema, ModelInstanceCreator, AsyncCollection, AsyncItem, } from './datastore/datastore';
export { Predicates, ModelPredicateCreator, ModelSortPredicateCreator, } from './predicates';
export { Adapter as StorageAdapter } from './storage/adapter';
export { NAMESPACES } from './util';
export declare const utils: {
    USER: import("./util").NAMESPACES;
    traverseModel: <T extends Readonly<Record<string, any>>>(srcModelName: string, instance: T, namespace: import("./types").SchemaNamespace, modelInstanceCreator: <T_1 extends Readonly<Record<string, any>>>(modelConstructor: import("./types").PersistentModelConstructor<T_1>, init: Partial<T_1>) => T_1, getModelConstructorByModelName: (namsespaceName: import("./util").NAMESPACES, modelName: string) => import("./types").PersistentModelConstructor<any>) => {
        modelName: string;
        item: T;
        instance: T;
    }[];
    validatePredicate: <T_2 extends Readonly<Record<string, any>>>(model: T_2, groupType: keyof import("./types").PredicateGroups<T_2>, predicatesOrGroups: (import("./types").PredicateObject<T_2> | import("./types").PredicatesGroup<T_2>)[]) => any;
    isNonModelConstructor: (obj: any) => obj is import("./types").NonModelTypeConstructor<any>;
    isModelConstructor: <T_3 extends Readonly<Record<string, any>>>(obj: any) => obj is import("./types").PersistentModelConstructor<T_3>;
};
export * from './types';
