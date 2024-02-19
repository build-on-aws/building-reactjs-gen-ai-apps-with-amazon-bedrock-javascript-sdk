import { Amplify } from '@aws-amplify/core';
import '@aws-amplify/core/internals/utils';
import { assertValidationError } from '../../../errors/assertValidationError.mjs';
import { AnalyticsValidationErrorCode } from '../../../errors/validation.mjs';
import { DEFAULT_KINESIS_FIREHOSE_CONFIG } from './constants.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const resolveConfig = () => {
    const config = Amplify.getConfig().Analytics?.KinesisFirehose;
    const { region, bufferSize = DEFAULT_KINESIS_FIREHOSE_CONFIG.bufferSize, flushSize = DEFAULT_KINESIS_FIREHOSE_CONFIG.flushSize, flushInterval = DEFAULT_KINESIS_FIREHOSE_CONFIG.flushInterval, resendLimit, } = {
        ...DEFAULT_KINESIS_FIREHOSE_CONFIG,
        ...config,
    };
    assertValidationError(!!region, AnalyticsValidationErrorCode.NoRegion);
    assertValidationError(flushSize < bufferSize, AnalyticsValidationErrorCode.InvalidFlushSize);
    return {
        region,
        bufferSize,
        flushSize,
        flushInterval,
        resendLimit,
    };
};

export { resolveConfig };
//# sourceMappingURL=resolveConfig.mjs.map
