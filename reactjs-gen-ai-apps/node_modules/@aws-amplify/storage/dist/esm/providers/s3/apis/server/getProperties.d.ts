import { AmplifyServer } from '@aws-amplify/core/internals/adapter-core';
import { GetPropertiesInput, GetPropertiesOutput } from '../../types';
export declare const getProperties: (contextSpec: AmplifyServer.ContextSpec, input: GetPropertiesInput) => Promise<GetPropertiesOutput>;
