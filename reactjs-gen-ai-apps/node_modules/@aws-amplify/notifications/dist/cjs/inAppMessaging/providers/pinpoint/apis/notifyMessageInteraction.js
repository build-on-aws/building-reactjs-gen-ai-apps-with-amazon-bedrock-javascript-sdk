'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyMessageInteraction = void 0;
const eventListeners_1 = require("../../../../eventListeners");
const utils_1 = require("../../../utils");
/**
 * Notifies the respective listener of the specified type with the message given.
 *
 * @param {NotifyMessageInteractionInput} input - The input object that holds the type and message.
 * @throws validation: {@link InAppMessagingValidationErrorCode} - Thrown when the provided parameters or library
 * configuration is incorrect, or if In App messaging hasn't been initialized.
 * @example
 * ```ts
 * onMessageRecieved((message) => {
 *   // Show end users the In-App message and notify event listeners
 *   notifyMessageInteraction({ type: 'messageDisplayed', message });
 * });
 * ```
 */
function notifyMessageInteraction({ type, message, }) {
    (0, utils_1.assertIsInitialized)();
    (0, eventListeners_1.notifyEventListeners)(type, message);
}
exports.notifyMessageInteraction = notifyMessageInteraction;
//# sourceMappingURL=notifyMessageInteraction.js.map
