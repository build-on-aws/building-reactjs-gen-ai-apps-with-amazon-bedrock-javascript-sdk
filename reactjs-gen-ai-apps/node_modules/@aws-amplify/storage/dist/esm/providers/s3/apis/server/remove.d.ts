import { AmplifyServer } from '@aws-amplify/core/internals/adapter-core';
import { RemoveInput, RemoveOutput } from '../../types';
export declare const remove: (contextSpec: AmplifyServer.ContextSpec, input: RemoveInput) => Promise<RemoveOutput>;
