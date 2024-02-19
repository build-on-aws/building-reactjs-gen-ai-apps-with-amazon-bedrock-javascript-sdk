'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointId = void 0;
const Cache_1 = require("../../../Cache");
const getCacheKey_1 = require("./getCacheKey");
/**
 * Returns an endpoint id from cache or `undefined` if not found.
 *
 * @internal
 */
const getEndpointId = async (appId, category) => {
    const cacheKey = (0, getCacheKey_1.getCacheKey)(appId, category);
    const cachedEndpointId = await Cache_1.Cache.getItem(cacheKey);
    return cachedEndpointId ?? undefined;
};
exports.getEndpointId = getEndpointId;
//# sourceMappingURL=getEndpointId.js.map
