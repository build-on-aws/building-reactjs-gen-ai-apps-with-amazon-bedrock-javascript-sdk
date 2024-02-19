import '@aws-amplify/core/internals/utils';
import { assertValidationError } from '../errors/assertValidationError.mjs';
import { AnalyticsValidationErrorCode } from '../errors/validation.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Validates tracker configuration.
 */
const validateTrackerConfiguration = (input) => {
    assertValidationError(input.type === 'event' ||
        input.type === 'pageView' ||
        input.type === 'session', AnalyticsValidationErrorCode.InvalidTracker);
};

export { validateTrackerConfiguration };
//# sourceMappingURL=trackerConfigHelpers.mjs.map
