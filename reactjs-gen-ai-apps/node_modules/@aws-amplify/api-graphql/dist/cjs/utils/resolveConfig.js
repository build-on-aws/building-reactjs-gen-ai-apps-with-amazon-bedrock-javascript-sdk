'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveConfig = void 0;
const core_1 = require("@aws-amplify/core");
const errors_1 = require("./errors");
const logger = new core_1.ConsoleLogger('GraphQLAPI resolveConfig');
/**
 * @internal
 */
const resolveConfig = (amplify) => {
    const config = amplify.getConfig();
    if (!config.API?.GraphQL) {
        logger.warn('The API configuration is missing. This is likely due to Amplify.configure() not being called prior to generateClient().');
    }
    const { apiKey, customEndpoint, customEndpointRegion, defaultAuthMode, endpoint, region, } = config.API?.GraphQL ?? {};
    // TODO: re-enable when working in all test environments:
    // assertValidationError(!!endpoint, APIValidationErrorCode.NoEndpoint);
    (0, errors_1.assertValidationError)(!(!customEndpoint && customEndpointRegion), errors_1.APIValidationErrorCode.NoCustomEndpoint);
    return {
        apiKey,
        customEndpoint,
        customEndpointRegion,
        defaultAuthMode,
        endpoint,
        region,
    };
};
exports.resolveConfig = resolveConfig;
//# sourceMappingURL=resolveConfig.js.map
