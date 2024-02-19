import { getDnsSuffix } from '../../clients/endpoints/getDnsSuffix.mjs';
import { jitteredBackoff } from '../../clients/middleware/retry/jitteredBackoff.mjs';
import { getRetryDecider } from '../../clients/middleware/retry/defaultRetryDecider.mjs';
import { parseJsonError } from '../../clients/serde/json.mjs';
import { getAmplifyUserAgent } from '../../Platform/index.mjs';
import { AmplifyUrl } from '../../utils/amplifyUrl/index.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * The service name used to sign requests if the API requires authentication.
 */
const SERVICE_NAME = 'mobiletargeting';
/**
 * The endpoint resolver function that returns the endpoint URL for a given region.
 */
const endpointResolver = ({ region }) => ({
    url: new AmplifyUrl(`https://pinpoint.${region}.${getDnsSuffix(region)}`),
});
/**
 * @internal
 */
const defaultConfig = {
    service: SERVICE_NAME,
    endpointResolver,
    retryDecider: getRetryDecider(parseJsonError),
    computeDelay: jitteredBackoff,
    userAgentValue: getAmplifyUserAgent(),
};
/**
 * @internal
 */
const getSharedHeaders = () => ({
    'content-type': 'application/json',
});

export { defaultConfig, getSharedHeaders };
//# sourceMappingURL=base.mjs.map
