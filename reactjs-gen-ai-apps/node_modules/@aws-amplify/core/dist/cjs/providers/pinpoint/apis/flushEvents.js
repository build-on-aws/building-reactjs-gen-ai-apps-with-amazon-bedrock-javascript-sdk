'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.flushEvents = void 0;
const getEventBuffer_1 = require("../utils/getEventBuffer");
const constants_1 = require("../utils/constants");
const flushEvents = ({ appId, region, credentials, bufferSize, flushInterval, flushSize, resendLimit, identityId, userAgentValue, }) => {
    (0, getEventBuffer_1.getEventBuffer)({
        appId,
        region,
        credentials,
        bufferSize: bufferSize ?? constants_1.BUFFER_SIZE,
        flushInterval: flushInterval ?? constants_1.FLUSH_INTERVAL,
        flushSize: flushSize ?? constants_1.FLUSH_SIZE,
        resendLimit: resendLimit ?? constants_1.RESEND_LIMIT,
        identityId,
        userAgentValue,
    }).flushAll();
};
exports.flushEvents = flushEvents;
//# sourceMappingURL=flushEvents.js.map
