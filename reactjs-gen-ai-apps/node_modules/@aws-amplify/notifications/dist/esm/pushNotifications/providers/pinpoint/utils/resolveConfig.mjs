import { Amplify } from '@aws-amplify/core';
import '@aws-amplify/core/internals/utils';
import { assert, PushNotificationValidationErrorCode } from '../../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
const resolveConfig = () => {
    const { appId, region } = Amplify.getConfig().Notifications?.PushNotification?.Pinpoint ?? {};
    assert(!!appId, PushNotificationValidationErrorCode.NoAppId);
    assert(!!region, PushNotificationValidationErrorCode.NoRegion);
    return { appId, region };
};

export { resolveConfig };
//# sourceMappingURL=resolveConfig.mjs.map
