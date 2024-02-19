// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const PROVIDER_NAME = 'pinpoint';
/**
 * Returns a unique cache key for a particular category/appId combination.
 *
 * @internal
 */
const getCacheKey = (appId, category) => `${category}:${PROVIDER_NAME}:${appId}`;

export { getCacheKey };
//# sourceMappingURL=getCacheKey.mjs.map
