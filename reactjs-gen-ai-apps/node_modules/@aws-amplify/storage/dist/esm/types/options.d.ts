import { StorageAccessLevel } from '@aws-amplify/core';
export type StorageOptions = {
    accessLevel?: StorageAccessLevel;
};
export type StorageListAllOptions = StorageOptions & {
    listAll: true;
};
export type StorageListPaginateOptions = StorageOptions & {
    listAll?: false;
    pageSize?: number;
    nextToken?: string;
};
export type StorageRemoveOptions = StorageOptions;
