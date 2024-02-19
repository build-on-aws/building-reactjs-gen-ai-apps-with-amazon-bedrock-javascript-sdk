'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.onMessageDismissed = void 0;
const eventListeners_1 = require("../../../../eventListeners");
const utils_1 = require("../../../utils");
/**
 * Registers a callback that will be invoked on `messageDismissed` events.
 *
 * @param {OnMessageDismissedInput} input - The input object that holds the callback handler.
 * @throws validation: {@link InAppMessagingValidationErrorCode} - Thrown when the provided parameters or library
 * configuration is incorrect, or if In App messaging hasn't been initialized.
 * @returns {OnMessageDismissedOutput} - An object that holds a remove method to stop listening to events.
 * @example
 * ```ts
 * onMessageDismissed((message) => {
 *   // use the message
 *   console.log(message.id);
 * });
 * ```
 */
function onMessageDismissed(input) {
    (0, utils_1.assertIsInitialized)();
    return (0, eventListeners_1.addEventListener)('messageDismissed', input);
}
exports.onMessageDismissed = onMessageDismissed;
//# sourceMappingURL=onMessageDismissed.js.map
