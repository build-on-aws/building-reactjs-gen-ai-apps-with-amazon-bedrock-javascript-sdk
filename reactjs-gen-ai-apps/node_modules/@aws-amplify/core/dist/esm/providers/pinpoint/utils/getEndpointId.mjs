import { Cache } from '../../../Cache/index.mjs';
import { getCacheKey } from './getCacheKey.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns an endpoint id from cache or `undefined` if not found.
 *
 * @internal
 */
const getEndpointId = async (appId, category) => {
    const cacheKey = getCacheKey(appId, category);
    const cachedEndpointId = await Cache.getItem(cacheKey);
    return cachedEndpointId ?? undefined;
};

export { getEndpointId };
//# sourceMappingURL=getEndpointId.mjs.map
