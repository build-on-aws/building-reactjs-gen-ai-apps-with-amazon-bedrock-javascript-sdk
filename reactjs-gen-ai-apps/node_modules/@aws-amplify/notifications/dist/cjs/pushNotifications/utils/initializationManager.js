'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInitialized = exports.initialize = void 0;
let initialized = false;
/**
 * Sets initialization status to true.
 *
 * @internal
 */
const initialize = async () => {
    initialized = true;
};
exports.initialize = initialize;
/**
 * Returns the initialization status of push notifications.
 *
 * @internal
 */
const isInitialized = () => initialized;
exports.isInitialized = isInitialized;
//# sourceMappingURL=initializationManager.js.map
