'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePushNotifications = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
/**
 * Initialize and set up the push notification category. The category must be first initialized before all other
 * functionalities become available.
 *
 * @throws platform: {@link PlatformNotSupportedError} - Thrown if called against an unsupported platform. Currently,
 * only React Native is supported by this API.
 * @remarks
 * It is recommended that this be called as early in your app as possible at the root of your application to allow
 * background processing of notifications.
 * @example
 * ```ts
 * Amplify.configure(config);
 * initializePushNotifications();
 * ```
 */
const initializePushNotifications = () => {
    throw new utils_1.PlatformNotSupportedError();
};
exports.initializePushNotifications = initializePushNotifications;
//# sourceMappingURL=initializePushNotifications.js.map
