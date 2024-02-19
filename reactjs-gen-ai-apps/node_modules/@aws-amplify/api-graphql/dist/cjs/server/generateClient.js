'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateClient = void 0;
const adapter_core_1 = require("@aws-amplify/core/internals/adapter-core");
const server_1 = require("../internals/server");
const types_1 = require("../types");
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
    const client = (0, server_1.generateClientWithAmplifyInstance)({
        amplify: null,
        config,
        authMode,
        authToken,
    });
    // TODO: improve this and the next type
    const prevGraphql = client.graphql;
    const wrappedGraphql = (contextSpec, options, additionalHeaders) => {
        const amplifyInstance = (0, adapter_core_1.getAmplifyServerContext)(contextSpec).amplify;
        return prevGraphql.call({ [types_1.__amplify]: amplifyInstance }, options, additionalHeaders);
    };
    client.graphql = wrappedGraphql;
    return client;
}
exports.generateClient = generateClient;
//# sourceMappingURL=generateClient.js.map
