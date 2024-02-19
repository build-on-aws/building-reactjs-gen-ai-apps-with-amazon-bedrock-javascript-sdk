import { getAmplifyUserAgent, Category } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getPushNotificationUserAgentString = (action) => getAmplifyUserAgent({
    category: Category.PushNotification,
    action,
});

export { getPushNotificationUserAgentString };
//# sourceMappingURL=getPushNotificationUserAgentString.mjs.map
