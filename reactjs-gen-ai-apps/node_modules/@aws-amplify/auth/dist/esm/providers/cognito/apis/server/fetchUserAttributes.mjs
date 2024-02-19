import { getAmplifyServerContext } from '@aws-amplify/core/internals/adapter-core';
import { fetchUserAttributes as fetchUserAttributes$1 } from '../internal/fetchUserAttributes.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const fetchUserAttributes = (contextSpec) => {
    return fetchUserAttributes$1(getAmplifyServerContext(contextSpec).amplify);
};

export { fetchUserAttributes };
//# sourceMappingURL=fetchUserAttributes.mjs.map
