'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAutoTrack = void 0;
const utils_1 = require("../../../utils");
const record_1 = require("./record");
// Configured Tracker instances for Pinpoint
const configuredTrackers = {};
// Callback that will emit an appropriate event to Pinpoint when required by the Tracker
const emitTrackingEvent = (eventName, attributes) => {
    (0, record_1.record)({
        name: eventName,
        attributes,
    });
};
/**
 * Configures automatic event tracking for Pinpoint. This API will automatically transmit an analytic event when
 * configured events are detected within your application. This can include: DOM element events (via the `event`
 * tracker), session events (via the `session` tracker), and page view events (via the `pageView` tracker).
 *
 * @remark Only session tracking is currently supported on React Native.
 *
 * @param {ConfigureAutoTrackInput} params The input object to configure auto track behavior.
 *
 * @throws service: {@link UpdateEndpointException} - Thrown when the underlying Pinpoint service returns an error.
 * @throws validation: {@link AnalyticsValidationErrorCode} - Thrown when the provided parameters or library
 *  configuration is incorrect.
 */
const configureAutoTrack = (input) => {
    (0, utils_1.validateTrackerConfiguration)(input);
    // Initialize or update this provider's trackers
    (0, utils_1.updateProviderTrackers)(input, emitTrackingEvent, configuredTrackers);
};
exports.configureAutoTrack = configureAutoTrack;
//# sourceMappingURL=configureAutoTrack.js.map
