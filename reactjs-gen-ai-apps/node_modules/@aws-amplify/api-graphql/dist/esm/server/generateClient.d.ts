import { GenerateServerClientParams, V6ClientSSRRequest } from '../types';
/**
 * Generates an GraphQL API client that works with Amplify server context.
 *
 * @example
 * import config from './amplifyconfiguration.json';
 * import { listPosts } from './graphql/queries';
 *
 * const client = generateServerClient({ config });
 *
 * const result = await runWithAmplifyServerContext({
 *   nextServerContext: { request, response },
 *   operation: (contextSpec) => client.graphql(contextSpec, {
 *     query: listPosts,
 *   }),
 * });
 */
export declare function generateClient<T extends Record<any, any> = never>({ config, authMode, authToken, }: GenerateServerClientParams): V6ClientSSRRequest<T>;
