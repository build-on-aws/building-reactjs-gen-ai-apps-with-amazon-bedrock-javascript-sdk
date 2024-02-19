import { Amplify } from '@aws-amplify/core';
import '@aws-amplify/core/internals/utils';
import { assertValidationError } from '../../../errors/assertValidationError.mjs';
import { AnalyticsValidationErrorCode } from '../../../errors/validation.mjs';
import { DEFAULT_PERSONALIZE_CONFIG, PERSONALIZE_FLUSH_SIZE_MAX } from './constants.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const resolveConfig = () => {
    const config = Amplify.getConfig().Analytics?.Personalize;
    const { region, trackingId, flushSize = DEFAULT_PERSONALIZE_CONFIG.flushSize, flushInterval = DEFAULT_PERSONALIZE_CONFIG.flushInterval, } = {
        ...DEFAULT_PERSONALIZE_CONFIG,
        ...config,
    };
    assertValidationError(!!region, AnalyticsValidationErrorCode.NoRegion);
    assertValidationError(!!trackingId, AnalyticsValidationErrorCode.NoTrackingId);
    assertValidationError(flushSize <= PERSONALIZE_FLUSH_SIZE_MAX, AnalyticsValidationErrorCode.InvalidFlushSize, `FlushSize for Personalize should be less or equal than ${PERSONALIZE_FLUSH_SIZE_MAX}`);
    return {
        region,
        trackingId,
        bufferSize: flushSize + 1,
        flushSize,
        flushInterval,
    };
};

export { resolveConfig };
//# sourceMappingURL=resolveConfig.mjs.map
