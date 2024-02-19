'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveConfig = void 0;
const core_1 = require("@aws-amplify/core");
const errors_1 = require("../../../errors");
const constants_1 = require("./constants");
const resolveConfig = () => {
    const config = core_1.Amplify.getConfig().Analytics?.Kinesis;
    const { region, bufferSize = constants_1.DEFAULT_KINESIS_CONFIG.bufferSize, flushSize = constants_1.DEFAULT_KINESIS_CONFIG.flushSize, flushInterval = constants_1.DEFAULT_KINESIS_CONFIG.flushInterval, resendLimit, } = {
        ...constants_1.DEFAULT_KINESIS_CONFIG,
        ...config,
    };
    (0, errors_1.assertValidationError)(!!region, errors_1.AnalyticsValidationErrorCode.NoRegion);
    (0, errors_1.assertValidationError)(flushSize < bufferSize, errors_1.AnalyticsValidationErrorCode.InvalidFlushSize);
    return {
        region,
        bufferSize,
        flushSize,
        flushInterval,
        resendLimit,
    };
};
exports.resolveConfig = resolveConfig;
//# sourceMappingURL=resolveConfig.js.map
