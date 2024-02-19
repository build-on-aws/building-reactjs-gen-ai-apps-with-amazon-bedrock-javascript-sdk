'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.record = void 0;
const core_1 = require("@aws-amplify/core");
const utils_1 = require("@aws-amplify/core/internals/utils");
const pinpoint_1 = require("@aws-amplify/core/internals/providers/pinpoint");
const errors_1 = require("../../../errors");
const utils_2 = require("../../../utils");
const utils_3 = require("../utils");
const logger = new core_1.ConsoleLogger('Analytics');
/**
 * Records an Analytic event to Pinpoint. Events will be buffered and periodically sent to Pinpoint.
 *
 * @param params The input object used to construct the request.
 *
 * @throws validation: {@link AnalyticsValidationErrorCode} - Thrown when the provided parameters or library
 *  configuration is incorrect.
 *
 * @example
 * ```ts
 * // Send an event to Pinpoint
 * record({ name: eventName })
 * ```
 *
 * @example
 * ```ts
 * // Send an event to Pinpoint with metrics & custom attributes
 * record({
 *     name: eventName,
 *     attributes: {
 *         'my-attribute': attributeValue
 *     },
 *     metrics: {
 *         'my-metric': metricValue
 *     }
 * })
 * ```
 */
const record = (input) => {
    const { appId, region, bufferSize, flushSize, flushInterval, resendLimit } = (0, utils_3.resolveConfig)();
    if (!(0, utils_2.isAnalyticsEnabled)()) {
        logger.debug('Analytics is disabled, event will not be recorded.');
        return;
    }
    (0, errors_1.assertValidationError)(!!input.name, errors_1.AnalyticsValidationErrorCode.NoEventName);
    (0, utils_3.resolveCredentials)()
        .then(({ credentials, identityId }) => {
        core_1.Hub.dispatch('analytics', { event: 'record', data: input, message: 'Recording Analytics event' }, 'Analytics', utils_1.AMPLIFY_SYMBOL);
        (0, pinpoint_1.record)({
            appId,
            category: 'Analytics',
            credentials,
            event: input,
            identityId,
            region,
            userAgentValue: (0, utils_2.getAnalyticsUserAgentString)(utils_1.AnalyticsAction.Record),
            bufferSize,
            flushSize,
            flushInterval,
            resendLimit,
        });
    })
        .catch(e => {
        // An error occured while fetching credentials or persisting the event to the buffer
        logger.warn('Failed to record event.', e);
    });
};
exports.record = record;
//# sourceMappingURL=record.js.map
