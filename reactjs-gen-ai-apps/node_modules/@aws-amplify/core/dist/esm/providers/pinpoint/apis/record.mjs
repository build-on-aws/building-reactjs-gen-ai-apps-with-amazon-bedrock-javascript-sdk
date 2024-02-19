import { amplifyUuid } from '../../../utils/amplifyUuid/index.mjs';
import '../../../Cache/index.mjs';
import { resolveEndpointId } from '../utils/resolveEndpointId.mjs';
import '../../../utils/sessionListener/index.mjs';
import { BUFFER_SIZE, FLUSH_INTERVAL, FLUSH_SIZE, RESEND_LIMIT } from '../utils/constants.mjs';
import { getEventBuffer } from '../utils/getEventBuffer.mjs';
import { SESSION_STOP_EVENT, SESSION_START_EVENT } from '../../../utils/sessionListener/constants.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
let session;
/**
 * @internal
 */
const record = async ({ appId, category, channelType, credentials, event, identityId, region, userAgentValue, bufferSize, flushInterval, flushSize, resendLimit, }) => {
    let eventSession = session;
    const currentTime = new Date();
    const timestampISOString = currentTime.toISOString();
    const eventId = amplifyUuid();
    // Prepare event buffer if required
    const buffer = getEventBuffer({
        appId,
        region,
        credentials,
        bufferSize: bufferSize ?? BUFFER_SIZE,
        flushInterval: flushInterval ?? FLUSH_INTERVAL,
        flushSize: flushSize ?? FLUSH_SIZE,
        resendLimit: resendLimit ?? RESEND_LIMIT,
        identityId,
        userAgentValue,
    });
    const endpointId = await resolveEndpointId({
        appId,
        category,
        channelType,
        credentials,
        identityId,
        region,
        userAgentValue,
    });
    // Generate session if required
    if (!eventSession || event.name === SESSION_START_EVENT) {
        const sessionId = amplifyUuid();
        session = {
            Id: sessionId,
            StartTimestamp: timestampISOString,
        };
        eventSession = session;
    }
    // Terminate session when required
    if (session && event.name === SESSION_STOP_EVENT) {
        eventSession = {
            ...session,
            StopTimestamp: timestampISOString,
            Duration: currentTime.getTime() - new Date(session.StartTimestamp).getTime(),
        };
        session = undefined;
    }
    // Push event to buffer
    buffer.push({
        eventId,
        endpointId,
        event,
        session: eventSession,
        timestamp: timestampISOString,
        resendLimit: resendLimit ?? RESEND_LIMIT,
    });
};

export { record };
//# sourceMappingURL=record.mjs.map
