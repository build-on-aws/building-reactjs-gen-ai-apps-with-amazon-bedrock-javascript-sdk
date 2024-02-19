'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventBuffer = void 0;
const PinpointEventBuffer_1 = require("./PinpointEventBuffer");
// Map of buffers by region -> appId
const eventBufferMap = {};
/**
 * Returns a PinpointEventBuffer instance for the specified region & app ID, creating one if it does not yet exist.
 *
 * @internal
 */
const getEventBuffer = ({ appId, region, credentials, bufferSize, flushInterval, flushSize, resendLimit, identityId, userAgentValue, }) => {
    if (eventBufferMap[region]?.[appId]) {
        const buffer = eventBufferMap[region][appId];
        /*
        If the identity has changed flush out the buffer and create a new instance. The old instance will be garbage
        collected.
        */
        if (buffer.identityHasChanged(identityId)) {
            buffer.flush();
        }
        else {
            return buffer;
        }
    }
    const buffer = new PinpointEventBuffer_1.PinpointEventBuffer({
        appId,
        bufferSize,
        credentials,
        flushInterval,
        flushSize,
        identityId,
        region,
        resendLimit,
        userAgentValue,
    });
    if (!eventBufferMap[region]) {
        eventBufferMap[region] = {};
    }
    eventBufferMap[region][appId] = buffer;
    return buffer;
};
exports.getEventBuffer = getEventBuffer;
//# sourceMappingURL=getEventBuffer.js.map
