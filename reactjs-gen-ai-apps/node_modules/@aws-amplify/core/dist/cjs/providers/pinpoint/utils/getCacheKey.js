'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheKey = void 0;
const PROVIDER_NAME = 'pinpoint';
/**
 * Returns a unique cache key for a particular category/appId combination.
 *
 * @internal
 */
const getCacheKey = (appId, category) => `${category}:${PROVIDER_NAME}:${appId}`;
exports.getCacheKey = getCacheKey;
//# sourceMappingURL=getCacheKey.js.map
