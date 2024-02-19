import { ConsoleLogger, Hub } from '@aws-amplify/core';
import { AMPLIFY_SYMBOL, AnalyticsAction } from '@aws-amplify/core/internals/utils';
import { record as record$1 } from '@aws-amplify/core/internals/providers/pinpoint';
import { assertValidationError } from '../../../errors/assertValidationError.mjs';
import { AnalyticsValidationErrorCode } from '../../../errors/validation.mjs';
import '../../../utils/eventBuffer/EventBuffer.mjs';
import { isAnalyticsEnabled } from '../../../utils/statusHelpers.mjs';
import { getAnalyticsUserAgentString } from '../../../utils/userAgent.mjs';
import '../../../trackers/EventTracker.mjs';
import '../../../trackers/PageViewTracker.mjs';
import '../../../trackers/SessionTracker.mjs';
import { resolveConfig } from '../utils/resolveConfig.mjs';
import { resolveCredentials } from '../utils/resolveCredentials.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new ConsoleLogger('Analytics');
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
    const { appId, region, bufferSize, flushSize, flushInterval, resendLimit } = resolveConfig();
    if (!isAnalyticsEnabled()) {
        logger.debug('Analytics is disabled, event will not be recorded.');
        return;
    }
    assertValidationError(!!input.name, AnalyticsValidationErrorCode.NoEventName);
    resolveCredentials()
        .then(({ credentials, identityId }) => {
        Hub.dispatch('analytics', { event: 'record', data: input, message: 'Recording Analytics event' }, 'Analytics', AMPLIFY_SYMBOL);
        record$1({
            appId,
            category: 'Analytics',
            credentials,
            event: input,
            identityId,
            region,
            userAgentValue: getAnalyticsUserAgentString(AnalyticsAction.Record),
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

export { record };
//# sourceMappingURL=record.mjs.map
