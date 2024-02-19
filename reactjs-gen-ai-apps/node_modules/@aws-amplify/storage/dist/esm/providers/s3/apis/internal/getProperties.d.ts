import { AmplifyClassV6 } from '@aws-amplify/core';
import { StorageAction } from '@aws-amplify/core/internals/utils';
import { GetPropertiesInput, GetPropertiesOutput } from '../../types';
export declare const getProperties: (amplify: AmplifyClassV6, input: GetPropertiesInput, action?: StorageAction) => Promise<GetPropertiesOutput>;
