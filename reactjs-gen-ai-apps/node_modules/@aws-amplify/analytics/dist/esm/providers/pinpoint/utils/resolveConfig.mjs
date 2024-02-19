import { Amplify } from '@aws-amplify/core';
import '@aws-amplify/core/internals/utils';
import { assertValidationError } from '../../../errors/assertValidationError.mjs';
import { AnalyticsValidationErrorCode } from '../../../errors/validation.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
const resolveConfig = () => {
    const { appId, region, bufferSize, flushSize, flushInterval, resendLimit } = Amplify.getConfig().Analytics?.Pinpoint ?? {};
    assertValidationError(!!appId, AnalyticsValidationErrorCode.NoAppId);
    assertValidationError(!!region, AnalyticsValidationErrorCode.NoRegion);
    return { appId, region, bufferSize, flushSize, flushInterval, resendLimit };
};

export { resolveConfig };
//# sourceMappingURL=resolveConfig.mjs.map
