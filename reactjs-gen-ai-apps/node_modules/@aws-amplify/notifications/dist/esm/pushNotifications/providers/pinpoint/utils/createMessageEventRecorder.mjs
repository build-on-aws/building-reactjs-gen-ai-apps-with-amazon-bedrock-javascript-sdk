import { record } from '@aws-amplify/core/internals/providers/pinpoint';
import { ConsoleLogger } from '@aws-amplify/core';
import '@aws-amplify/core/internals/utils';
import { resolveCredentials } from '../../../utils/resolveCredentials.mjs';
import { getAnalyticsEvent } from './getAnalyticsEvent.mjs';
import { getChannelType } from './getChannelType.mjs';
import { resolveConfig } from './resolveConfig.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new ConsoleLogger('PushNotification.recordMessageEvent');
/**
 * @internal
 */
const createMessageEventRecorder = (event, callback) => async (message) => {
    const { credentials } = await resolveCredentials();
    const { appId, region } = resolveConfig();
    await recordMessageEvent({
        appId,
        credentials,
        event,
        message,
        region,
    });
    callback?.();
};
const recordMessageEvent = async ({ appId, credentials, event, message, region, }) => {
    const analyticsEvent = getAnalyticsEvent(message, event);
    if (!analyticsEvent) {
        logger.debug('A notification missing event information was not recorded');
        return;
    }
    return record({
        appId,
        category: 'PushNotification',
        channelType: getChannelType(),
        credentials,
        event: analyticsEvent,
        region,
    });
};

export { createMessageEventRecorder };
//# sourceMappingURL=createMessageEventRecorder.mjs.map
