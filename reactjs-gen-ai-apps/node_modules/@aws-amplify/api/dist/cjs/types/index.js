'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLAuthError = exports.graphqlOperation = void 0;
/**
 * This exports from the types directory is a temporary workaround, since Amplify CLI currently
 * generates code that relies on this import path https://github.com/aws-amplify/amplify-cli/issues/3863
 * This will be removed in future release when CLI and customers moves to recommeneded import styles.
 */
var api_graphql_1 = require("@aws-amplify/api-graphql");
Object.defineProperty(exports, "graphqlOperation", { enumerable: true, get: function () { return api_graphql_1.graphqlOperation; } });
Object.defineProperty(exports, "GraphQLAuthError", { enumerable: true, get: function () { return api_graphql_1.GraphQLAuthError; } });
//# sourceMappingURL=index.js.map
