// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
let analyticsEnabled = true;
const enableAnalytics = () => {
    analyticsEnabled = true;
};
const disableAnalytics = () => {
    analyticsEnabled = false;
};
/**
 * Returns the current status of the Analytics category.
 */
const isAnalyticsEnabled = () => analyticsEnabled;

export { disableAnalytics, enableAnalytics, isAnalyticsEnabled };
//# sourceMappingURL=statusHelpers.mjs.map
