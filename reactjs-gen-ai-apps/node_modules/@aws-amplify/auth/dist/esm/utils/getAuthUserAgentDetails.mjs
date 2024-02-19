import { Category } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getAuthUserAgentDetails = (action, customUserAgentDetails) => ({
    category: Category.Auth,
    action,
    ...customUserAgentDetails,
});

export { getAuthUserAgentDetails };
//# sourceMappingURL=getAuthUserAgentDetails.mjs.map
