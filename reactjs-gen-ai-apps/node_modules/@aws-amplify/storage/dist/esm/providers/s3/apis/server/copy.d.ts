import { AmplifyServer } from '@aws-amplify/core/internals/adapter-core';
import { CopyInput, CopyOutput } from '../../types';
export declare const copy: (contextSpec: AmplifyServer.ContextSpec, input: CopyInput) => Promise<CopyOutput>;
