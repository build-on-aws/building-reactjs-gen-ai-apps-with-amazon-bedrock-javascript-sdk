'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePrefix = void 0;
const assertValidationError_1 = require("../errors/utils/assertValidationError");
const validation_1 = require("../errors/types/validation");
const resolvePrefix = ({ accessLevel, targetIdentityId, }) => {
    if (accessLevel === 'private') {
        (0, assertValidationError_1.assertValidationError)(!!targetIdentityId, validation_1.StorageValidationErrorCode.NoIdentityId);
        return `private/${targetIdentityId}/`;
    }
    else if (accessLevel === 'protected') {
        (0, assertValidationError_1.assertValidationError)(!!targetIdentityId, validation_1.StorageValidationErrorCode.NoIdentityId);
        return `protected/${targetIdentityId}/`;
    }
    else {
        return 'public/';
    }
};
exports.resolvePrefix = resolvePrefix;
//# sourceMappingURL=resolvePrefix.js.map
