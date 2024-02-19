import { AmplifyClassV6 } from '@aws-amplify/core';
import { GetInput, GetOperation, PostInput, PostOperation, PutInput, PutOperation, DeleteInput, DeleteOperation, HeadInput, HeadOperation, PatchInput, PatchOperation } from '../../types';
export declare const get: (amplify: AmplifyClassV6, input: GetInput) => GetOperation;
export declare const post: (amplify: AmplifyClassV6, input: PostInput) => PostOperation;
export declare const put: (amplify: AmplifyClassV6, input: PutInput) => PutOperation;
export declare const del: (amplify: AmplifyClassV6, input: DeleteInput) => DeleteOperation;
export declare const head: (amplify: AmplifyClassV6, input: HeadInput) => HeadOperation;
export declare const patch: (amplify: AmplifyClassV6, input: PatchInput) => PatchOperation;
