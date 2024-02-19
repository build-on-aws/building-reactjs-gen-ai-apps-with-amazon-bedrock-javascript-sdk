import { StorageAccessLevel } from '@aws-amplify/core';
type ResolvePrefixOptions = {
    accessLevel: StorageAccessLevel;
    targetIdentityId?: string;
};
export declare const resolvePrefix: ({ accessLevel, targetIdentityId, }: ResolvePrefixOptions) => string;
export {};
