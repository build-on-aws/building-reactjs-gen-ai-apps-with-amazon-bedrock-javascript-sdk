import { getAmplifyUserAgent, Category } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getAuthUserAgentValue = (action, customUserAgentDetails) => getAmplifyUserAgent({
    category: Category.Auth,
    action,
    ...customUserAgentDetails,
});

export { getAuthUserAgentValue };
//# sourceMappingURL=getAuthUserAgentValue.mjs.map
