'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProviderTrackers = void 0;
const trackers_1 = require("../trackers");
/**
 * Updates a provider's trackers as appropriate for the provided auto-track configuration.
 *
 * @remark
 * This utility will mutate the provider's configured trackers via `providerTrackers`.
 */
const updateProviderTrackers = (input, providerEventRecorder, providerTrackers) => {
    let trackerInstance;
    const trackerType = input.type;
    const currentTracker = providerTrackers[trackerType];
    // Check if the tracker was disabled & should be cleaned up
    if (!input.enable) {
        if (currentTracker) {
            currentTracker.cleanup();
            delete providerTrackers[trackerType];
        }
        return;
    }
    // Re-configure the existing tracker, or create & configure an instance if it doesn't exist yet
    if (currentTracker) {
        currentTracker.configure(providerEventRecorder, input.options);
        return;
    }
    // Create a new tracker instance for the type
    if (trackerType === 'event') {
        trackerInstance = new trackers_1.EventTracker(providerEventRecorder, input.options);
    }
    else if (trackerType === 'pageView') {
        trackerInstance = new trackers_1.PageViewTracker(providerEventRecorder, input.options);
    }
    else if (trackerType === 'session') {
        trackerInstance = new trackers_1.SessionTracker(providerEventRecorder, input.options);
    }
    if (trackerInstance) {
        providerTrackers[trackerType] = trackerInstance;
    }
};
exports.updateProviderTrackers = updateProviderTrackers;
//# sourceMappingURL=trackerHelpers.js.map
