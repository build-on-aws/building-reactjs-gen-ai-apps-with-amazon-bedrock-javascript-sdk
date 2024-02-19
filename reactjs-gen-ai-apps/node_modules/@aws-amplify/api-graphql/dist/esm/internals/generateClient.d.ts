import { V6Client } from '../types';
import { ClientGenerationParams } from './types';
/**
 * @private
 *
 * Creates a client that can be used to make GraphQL requests, using a provided `AmplifyClassV6`
 * compatible context object for config and auth fetching.
 *
 * @param params
 * @returns
 */
export declare function generateClient<T extends Record<any, any> = never>(params: ClientGenerationParams): V6Client<T>;
