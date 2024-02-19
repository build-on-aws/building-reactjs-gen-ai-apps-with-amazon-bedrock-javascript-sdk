'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveConfig = void 0;
const core_1 = require("@aws-amplify/core");
const errors_1 = require("../../../errors");
const constants_1 = require("./constants");
const resolveConfig = () => {
    const config = core_1.Amplify.getConfig().Analytics?.Personalize;
    const { region, trackingId, flushSize = constants_1.DEFAULT_PERSONALIZE_CONFIG.flushSize, flushInterval = constants_1.DEFAULT_PERSONALIZE_CONFIG.flushInterval, } = {
        ...constants_1.DEFAULT_PERSONALIZE_CONFIG,
        ...config,
    };
    (0, errors_1.assertValidationError)(!!region, errors_1.AnalyticsValidationErrorCode.NoRegion);
    (0, errors_1.assertValidationError)(!!trackingId, errors_1.AnalyticsValidationErrorCode.NoTrackingId);
    (0, errors_1.assertValidationError)(flushSize <= constants_1.PERSONALIZE_FLUSH_SIZE_MAX, errors_1.AnalyticsValidationErrorCode.InvalidFlushSize, `FlushSize for Personalize should be less or equal than ${constants_1.PERSONALIZE_FLUSH_SIZE_MAX}`);
    return {
        region,
        trackingId,
        bufferSize: flushSize + 1,
        flushSize,
        flushInterval,
    };
};
exports.resolveConfig = resolveConfig;
//# sourceMappingURL=resolveConfig.js.map
