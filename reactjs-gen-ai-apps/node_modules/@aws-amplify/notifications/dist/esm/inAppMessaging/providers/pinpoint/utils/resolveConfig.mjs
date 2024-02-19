import { Amplify } from '@aws-amplify/core';
import '@aws-amplify/core/internals/utils';
import { assertValidationError } from '../../../errors/assertValidationError.mjs';
import { InAppMessagingValidationErrorCode } from '../../../errors/validation.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
const resolveConfig = () => {
    const { appId, region } = Amplify.getConfig().Notifications?.InAppMessaging?.Pinpoint ?? {};
    assertValidationError(!!appId, InAppMessagingValidationErrorCode.NoAppId);
    assertValidationError(!!region, InAppMessagingValidationErrorCode.NoRegion);
    return { appId, region };
};

export { resolveConfig };
//# sourceMappingURL=resolveConfig.mjs.map
