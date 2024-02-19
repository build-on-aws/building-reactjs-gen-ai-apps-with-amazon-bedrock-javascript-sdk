import { PinpointEventBuffer } from './PinpointEventBuffer.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
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
    const buffer = new PinpointEventBuffer({
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

export { getEventBuffer };
//# sourceMappingURL=getEventBuffer.mjs.map
