import { getEventBuffer } from '../utils/getEventBuffer.mjs';
import { BUFFER_SIZE, FLUSH_INTERVAL, FLUSH_SIZE, RESEND_LIMIT } from '../utils/constants.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const flushEvents = ({ appId, region, credentials, bufferSize, flushInterval, flushSize, resendLimit, identityId, userAgentValue, }) => {
    getEventBuffer({
        appId,
        region,
        credentials,
        bufferSize: bufferSize ?? BUFFER_SIZE,
        flushInterval: flushInterval ?? FLUSH_INTERVAL,
        flushSize: flushSize ?? FLUSH_SIZE,
        resendLimit: resendLimit ?? RESEND_LIMIT,
        identityId,
        userAgentValue,
    }).flushAll();
};

export { flushEvents };
//# sourceMappingURL=flushEvents.mjs.map
