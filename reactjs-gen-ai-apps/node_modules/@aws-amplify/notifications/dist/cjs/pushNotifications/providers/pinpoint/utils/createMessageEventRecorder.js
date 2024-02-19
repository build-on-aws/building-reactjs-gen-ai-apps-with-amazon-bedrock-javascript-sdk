'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessageEventRecorder = void 0;
const pinpoint_1 = require("@aws-amplify/core/internals/providers/pinpoint");
const core_1 = require("@aws-amplify/core");
const utils_1 = require("../../../utils");
const getAnalyticsEvent_1 = require("./getAnalyticsEvent");
const getChannelType_1 = require("./getChannelType");
const resolveConfig_1 = require("./resolveConfig");
const logger = new core_1.ConsoleLogger('PushNotification.recordMessageEvent');
/**
 * @internal
 */
const createMessageEventRecorder = (event, callback) => async (message) => {
    const { credentials } = await (0, utils_1.resolveCredentials)();
    const { appId, region } = (0, resolveConfig_1.resolveConfig)();
    await recordMessageEvent({
        appId,
        credentials,
        event,
        message,
        region,
    });
    callback?.();
};
exports.createMessageEventRecorder = createMessageEventRecorder;
const recordMessageEvent = async ({ appId, credentials, event, message, region, }) => {
    const analyticsEvent = (0, getAnalyticsEvent_1.getAnalyticsEvent)(message, event);
    if (!analyticsEvent) {
        logger.debug('A notification missing event information was not recorded');
        return;
    }
    return (0, pinpoint_1.record)({
        appId,
        category: 'PushNotification',
        channelType: (0, getChannelType_1.getChannelType)(),
        credentials,
        event: analyticsEvent,
        region,
    });
};
//# sourceMappingURL=createMessageEventRecorder.js.map
