'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.onMessageActionTaken = void 0;
const eventListeners_1 = require("../../../../eventListeners");
const utils_1 = require("../../../utils");
/**
 * Registers a callback that will be invoked on `messageActionTaken` events.
 *
 * @param {OnMessageActionTakenInput} input - The input object that holds the callback handler.
 * @throws validation: {@link InAppMessagingValidationErrorCode} - Thrown when the provided parameters or library
 * configuration is incorrect, or if In App messaging hasn't been initialized.
 * @returns {OnMessageActionTakenOutput} - An object that holds a remove method to stop listening to events.
 * @example
 * ```ts
 * onMessageActionTaken((message) => {
 *   // use the message
 *   console.log(message.id);
 * });
 * ```
 */
function onMessageActionTaken(input) {
    (0, utils_1.assertIsInitialized)();
    return (0, eventListeners_1.addEventListener)('messageActionTaken', input);
}
exports.onMessageActionTaken = onMessageActionTaken;
//# sourceMappingURL=onMessageActionTaken.js.map
