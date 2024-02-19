'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSigningInfo = void 0;
const constants_1 = require("./constants");
/**
 * Infer the signing service and region from the given URL, and for REST API only, from the Amplify configuration.
 * It supports raw API Gateway endpoint and AppSync endpoint.
 *
 * @internal
 */
const parseSigningInfo = (url, restApiOptions) => {
    const { service: signingService = constants_1.DEFAULT_REST_IAM_SIGNING_SERVICE, region: signingRegion = constants_1.DEFAULT_IAM_SIGNING_REGION, } = restApiOptions?.amplify.getConfig()?.API?.REST?.[restApiOptions?.apiName] ??
        {};
    const { hostname } = url;
    const [, service, region] = constants_1.APIG_HOSTNAME_PATTERN.exec(hostname) ?? [];
    if (service === constants_1.DEFAULT_REST_IAM_SIGNING_SERVICE) {
        // The configured endpoint is an API Gateway endpoint
        // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-call-api.html
        return {
            service,
            region: region ?? signingRegion,
        };
    }
    else if (service === 'appsync-api') {
        // AppSync endpoint is internally supported because GraphQL operation will send request using POST handler.
        // example: https://xxxx.appsync-api.us-east-1.amazonaws.com/graphql
        return {
            service: 'appsync',
            region: region ?? signingRegion,
        };
    }
    else {
        return {
            service: signingService,
            region: signingRegion,
        };
    }
};
exports.parseSigningInfo = parseSigningInfo;
//# sourceMappingURL=parseSigningInfo.js.map
