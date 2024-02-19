'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTrackerConfiguration = void 0;
const errors_1 = require("../errors");
/**
 * Validates tracker configuration.
 */
const validateTrackerConfiguration = (input) => {
    (0, errors_1.assertValidationError)(input.type === 'event' ||
        input.type === 'pageView' ||
        input.type === 'session', errors_1.AnalyticsValidationErrorCode.InvalidTracker);
};
exports.validateTrackerConfiguration = validateTrackerConfiguration;
//# sourceMappingURL=trackerConfigHelpers.js.map
