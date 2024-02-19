'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLaunchNotification = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
/**
 * Returns the notification which launched your app from a terminated state. The launch notification is consumed by
 * calls to this function and will yield a null result if:
 *   1. It is more than once (i.e. subsequent calls will be null)
 *   2. Another notification was opened while your app was running (either in foreground or background)
 *   3. Your app was brought back to the foreground by some other means (e.g. user tapped the app icon)
 *
 * @throws platform: {@link PlatformNotSupportedError} - Thrown if called against an unsupported platform. Currently,
 * only React Native is supported by this API.
 * @returns {Promise<GetLaunchNotificationOutput>} - a promise resolving to {@link PushNotificationMessage} if there is
 * a launch notification and `null` otherwise.
 * @example
 * ```ts
 * const launchNotification = await getLaunchNotification();
 * ```
 */
const getLaunchNotification = async () => {
    throw new utils_1.PlatformNotSupportedError();
};
exports.getLaunchNotification = getLaunchNotification;
//# sourceMappingURL=getLaunchNotification.js.map
