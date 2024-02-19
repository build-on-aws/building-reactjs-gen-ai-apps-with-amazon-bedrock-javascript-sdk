import { getAmplifyUserAgentObject, Category, getAmplifyUserAgent } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function getInAppMessagingUserAgent(action) {
    return getAmplifyUserAgentObject({
        category: Category.InAppMessaging,
        action,
    });
}
function getInAppMessagingUserAgentString(action) {
    return getAmplifyUserAgent({
        category: Category.InAppMessaging,
        action,
    });
}

export { getInAppMessagingUserAgent, getInAppMessagingUserAgentString };
//# sourceMappingURL=userAgent.mjs.map
