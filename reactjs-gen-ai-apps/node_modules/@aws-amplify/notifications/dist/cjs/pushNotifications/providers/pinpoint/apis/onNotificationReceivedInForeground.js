'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.onNotificationReceivedInForeground = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
/**
 * Registers a listener that will be triggered when a notification is received while app is in a foreground state.
 *
 * @param {OnNotificationReceivedInForegroundInput} input - A callback handler to be invoked with the received
 * {@link PushNotificationMessage}.
 * @returns {OnNotificationReceivedInForegroundOutput} - An object with a remove function to remove the listener.
 * @example
 * ```ts
 * // Register a listener
 * onNotificationReceivedInForeground(message => {
 *   doSomething(message);
 * });
 * ```
 * @example
 * ```ts
 * // Register multiple listeners
 * onNotificationReceivedInForeground(message => {
 *   doSomething(message);
 * });
 *
 * onNotificationReceivedInForeground(message => {
 *   doSomethingElse(message);
 * });
 * ```
 */
const onNotificationReceivedInForeground = () => {
    throw new utils_1.PlatformNotSupportedError();
};
exports.onNotificationReceivedInForeground = onNotificationReceivedInForeground;
//# sourceMappingURL=onNotificationReceivedInForeground.js.map
