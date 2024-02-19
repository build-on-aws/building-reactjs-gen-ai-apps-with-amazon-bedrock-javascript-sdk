'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.disable = void 0;
const utils_1 = require("../utils");
/**
 * Disables the Analytics category.
 *
 * @note
 * When Analytics is disabled events will not be buffered or transmitted to your selected service. Any auto-tracking
 * behavior that you have configured via `configureAutoTrack` will not have any effect while Analytics is disabled.
 */
exports.disable = utils_1.disableAnalytics;
//# sourceMappingURL=disable.js.map
