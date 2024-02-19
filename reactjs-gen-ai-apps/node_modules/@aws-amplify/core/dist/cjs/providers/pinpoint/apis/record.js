'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.record = void 0;
const amplifyUuid_1 = require("../../../utils/amplifyUuid");
const utils_1 = require("../utils");
const sessionListener_1 = require("../../../utils/sessionListener");
const constants_1 = require("../utils/constants");
const getEventBuffer_1 = require("../utils/getEventBuffer");
let session;
/**
 * @internal
 */
const record = async ({ appId, category, channelType, credentials, event, identityId, region, userAgentValue, bufferSize, flushInterval, flushSize, resendLimit, }) => {
    let eventSession = session;
    const currentTime = new Date();
    const timestampISOString = currentTime.toISOString();
    const eventId = (0, amplifyUuid_1.amplifyUuid)();
    // Prepare event buffer if required
    const buffer = (0, getEventBuffer_1.getEventBuffer)({
        appId,
        region,
        credentials,
        bufferSize: bufferSize ?? constants_1.BUFFER_SIZE,
        flushInterval: flushInterval ?? constants_1.FLUSH_INTERVAL,
        flushSize: flushSize ?? constants_1.FLUSH_SIZE,
        resendLimit: resendLimit ?? constants_1.RESEND_LIMIT,
        identityId,
        userAgentValue,
    });
    const endpointId = await (0, utils_1.resolveEndpointId)({
        appId,
        category,
        channelType,
        credentials,
        identityId,
        region,
        userAgentValue,
    });
    // Generate session if required
    if (!eventSession || event.name === sessionListener_1.SESSION_START_EVENT) {
        const sessionId = (0, amplifyUuid_1.amplifyUuid)();
        session = {
            Id: sessionId,
            StartTimestamp: timestampISOString,
        };
        eventSession = session;
    }
    // Terminate session when required
    if (session && event.name === sessionListener_1.SESSION_STOP_EVENT) {
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
        resendLimit: resendLimit ?? constants_1.RESEND_LIMIT,
    });
};
exports.record = record;
//# sourceMappingURL=record.js.map
