'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsInitialized = exports.isInitialized = exports.initialize = void 0;
const errors_1 = require("../errors");
let initialized = false;
/**
 * Sets initialization status to true.
 *
 * @internal
 */
const initialize = () => {
    initialized = true;
};
exports.initialize = initialize;
/**
 * Returns the initialization status of In-App Messaging.
 *
 * @internal
 */
const isInitialized = () => initialized;
exports.isInitialized = isInitialized;
function assertIsInitialized() {
    (0, errors_1.assertValidationError)((0, exports.isInitialized)(), errors_1.InAppMessagingValidationErrorCode.NotInitialized);
}
exports.assertIsInitialized = assertIsInitialized;
//# sourceMappingURL=statusHelpers.js.map
