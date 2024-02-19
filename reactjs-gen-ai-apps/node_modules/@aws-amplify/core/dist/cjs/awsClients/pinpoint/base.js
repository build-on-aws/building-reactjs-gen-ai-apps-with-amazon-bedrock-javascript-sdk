'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSharedHeaders = exports.defaultConfig = void 0;
const endpoints_1 = require("../../clients/endpoints");
const retry_1 = require("../../clients/middleware/retry");
const json_1 = require("../../clients/serde/json");
const Platform_1 = require("../../Platform");
const amplifyUrl_1 = require("../../utils/amplifyUrl");
/**
 * The service name used to sign requests if the API requires authentication.
 */
const SERVICE_NAME = 'mobiletargeting';
/**
 * The endpoint resolver function that returns the endpoint URL for a given region.
 */
const endpointResolver = ({ region }) => ({
    url: new amplifyUrl_1.AmplifyUrl(`https://pinpoint.${region}.${(0, endpoints_1.getDnsSuffix)(region)}`),
});
/**
 * @internal
 */
exports.defaultConfig = {
    service: SERVICE_NAME,
    endpointResolver,
    retryDecider: (0, retry_1.getRetryDecider)(json_1.parseJsonError),
    computeDelay: retry_1.jitteredBackoff,
    userAgentValue: (0, Platform_1.getAmplifyUserAgent)(),
};
/**
 * @internal
 */
const getSharedHeaders = () => ({
    'content-type': 'application/json',
});
exports.getSharedHeaders = getSharedHeaders;
//# sourceMappingURL=base.js.map
