import '@aws-amplify/core/internals/utils';
import { assertValidationError } from '../errors/assertValidationError.mjs';
import { AnalyticsValidationErrorCode } from '../errors/validation.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Validates tracker configuration.
 */
const validateTrackerConfiguration = (input) => {
    // React Native only supports session tracking
    assertValidationError(input.type === 'session', AnalyticsValidationErrorCode.UnsupportedPlatform);
};

export { validateTrackerConfiguration };
//# sourceMappingURL=trackerConfigHelpers.native.mjs.map
