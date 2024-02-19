'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCredentials = void 0;
const core_1 = require("@aws-amplify/core");
const errorHelpers_1 = require("../errors/errorHelpers");
/**
 * @internal
 */
const resolveCredentials = async () => {
    const { credentials, identityId } = await (0, core_1.fetchAuthSession)();
    (0, errorHelpers_1.assert)(!!credentials, errorHelpers_1.PushNotificationValidationErrorCode.NoCredentials);
    return { credentials, identityId };
};
exports.resolveCredentials = resolveCredentials;
//# sourceMappingURL=resolveCredentials.js.map
