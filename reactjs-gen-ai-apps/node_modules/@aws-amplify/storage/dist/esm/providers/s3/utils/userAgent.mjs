import { getAmplifyUserAgent, Category } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function getStorageUserAgentValue(action) {
    return getAmplifyUserAgent({
        category: Category.Storage,
        action,
    });
}

export { getStorageUserAgentValue };
//# sourceMappingURL=userAgent.mjs.map
