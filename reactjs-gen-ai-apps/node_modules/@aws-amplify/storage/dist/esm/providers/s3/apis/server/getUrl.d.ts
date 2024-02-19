import { AmplifyServer } from '@aws-amplify/core/internals/adapter-core';
import { GetUrlInput, GetUrlOutput } from '../../types';
export declare const getUrl: (contextSpec: AmplifyServer.ContextSpec, input: GetUrlInput) => Promise<GetUrlOutput>;
