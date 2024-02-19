'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnalyticsEnabled = exports.disableAnalytics = exports.enableAnalytics = void 0;
let analyticsEnabled = true;
const enableAnalytics = () => {
    analyticsEnabled = true;
};
exports.enableAnalytics = enableAnalytics;
const disableAnalytics = () => {
    analyticsEnabled = false;
};
exports.disableAnalytics = disableAnalytics;
/**
 * Returns the current status of the Analytics category.
 */
const isAnalyticsEnabled = () => analyticsEnabled;
exports.isAnalyticsEnabled = isAnalyticsEnabled;
//# sourceMappingURL=statusHelpers.js.map
