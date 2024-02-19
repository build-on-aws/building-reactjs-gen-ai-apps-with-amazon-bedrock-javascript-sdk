'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.onNotificationOpened = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
/**
 * Registers a listener that will be triggered when a notification is opened by user.
 *
 * @param {OnNotificationOpenedInput} input - A callback handler to be invoked with the opened
 * {@link PushNotificationMessage}.
 * @returns {OnNotificationOpenedOutput} - An object with a remove function to remove the listener.
 * @example
 * ```ts
 * // Register a listener
 * onNotificationOpened(message => {
 *   doSomething(message);
 * });
 * ```
 * @example
 * ```ts
 * // Register multiple listeners
 * onNotificationOpened(message => {
 *   doSomething(message);
 * });
 *
 * onNotificationOpened(message => {
 *   doSomethingElse(message);
 * });
 * ```
 */
const onNotificationOpened = () => {
    throw new utils_1.PlatformNotSupportedError();
};
exports.onNotificationOpened = onNotificationOpened;
//# sourceMappingURL=onNotificationOpened.js.map
