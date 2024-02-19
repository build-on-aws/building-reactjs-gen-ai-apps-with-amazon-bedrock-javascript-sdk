import { AmplifyErrorCode } from '../../../types/errors.mjs';
import { assert } from '../../../errors/errorHelpers.mjs';
import { updateEndpoint } from '../apis/updateEndpoint.mjs';
import { getEndpointId } from './getEndpointId.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Resolves an endpoint id from cache or prepare via updateEndpoint if one does not already exist,
 * which will generate and cache an endpoint id between calls.
 *
 * @internal
 */
const resolveEndpointId = async ({ address, appId, category, channelType, credentials, identityId, region, userAgentValue, }) => {
    let endpointId = await getEndpointId(appId, category);
    if (!endpointId) {
        await updateEndpoint({
            address,
            appId,
            category,
            channelType,
            credentials,
            identityId,
            region,
            userAgentValue,
        });
        endpointId = await getEndpointId(appId, category);
    }
    assert(!!endpointId, AmplifyErrorCode.NoEndpointId);
    return endpointId;
};

export { resolveEndpointId };
//# sourceMappingURL=resolveEndpointId.mjs.map
