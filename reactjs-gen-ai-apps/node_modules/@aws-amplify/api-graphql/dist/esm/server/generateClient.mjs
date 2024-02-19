import { getAmplifyServerContext } from '@aws-amplify/core/internals/adapter-core';
import { generateClientWithAmplifyInstance } from '../internals/server/generateClientWithAmplifyInstance.mjs';
import { __amplify } from '../types/index.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
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
function generateClient({ config, authMode, authToken, }) {
    // passing `null` instance because each (future model) method must retrieve a valid instance
    // from server context
    const client = generateClientWithAmplifyInstance({
        amplify: null,
        config,
        authMode,
        authToken,
    });
    // TODO: improve this and the next type
    const prevGraphql = client.graphql;
    const wrappedGraphql = (contextSpec, options, additionalHeaders) => {
        const amplifyInstance = getAmplifyServerContext(contextSpec).amplify;
        return prevGraphql.call({ [__amplify]: amplifyInstance }, options, additionalHeaders);
    };
    client.graphql = wrappedGraphql;
    return client;
}

export { generateClient };
//# sourceMappingURL=generateClient.mjs.map
