import { getAmplifyUserAgentObject, Category, getAmplifyUserAgent } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function getAnalyticsUserAgent(action) {
    return getAmplifyUserAgentObject({
        category: Category.Analytics,
        action,
    });
}
function getAnalyticsUserAgentString(action) {
    return getAmplifyUserAgent({
        category: Category.Analytics,
        action,
    });
}

export { getAnalyticsUserAgent, getAnalyticsUserAgentString };
//# sourceMappingURL=userAgent.mjs.map
