import { Cache } from '../../../Cache/index.mjs';
import { getCacheKey } from './getCacheKey.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Writes an endpoint id to a long-lived cache.
 *
 * @internal
 */
const cacheEndpointId = async (appId, category, endpointId) => {
    const cacheKey = getCacheKey(appId, category);
    // Set a longer TTL to avoid endpoint id being deleted after the default TTL (3 days)
    // Also set its priority to the highest to reduce its chance of being deleted when cache is full
    const ttl = 1000 * 60 * 60 * 24 * 365 * 100; // 100 years
    const expiration = new Date().getTime() + ttl;
    return Cache.setItem(cacheKey, endpointId, {
        expires: expiration,
        priority: 1,
    });
};

export { cacheEndpointId };
//# sourceMappingURL=cacheEndpointId.mjs.map
