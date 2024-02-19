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
    // React Native only supports session tracking
    (0, errors_1.assertValidationError)(input.type === 'session', errors_1.AnalyticsValidationErrorCode.UnsupportedPlatform);
};
exports.validateTrackerConfiguration = validateTrackerConfiguration;
//# sourceMappingURL=trackerConfigHelpers.native.js.map
