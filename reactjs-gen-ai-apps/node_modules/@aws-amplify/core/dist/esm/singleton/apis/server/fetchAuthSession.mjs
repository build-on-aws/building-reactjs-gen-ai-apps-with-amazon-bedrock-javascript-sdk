import { getAmplifyServerContext } from '../../../adapterCore/serverContext/serverContext.mjs';
import '../../../types/errors.mjs';
import '../../../errors/errorHelpers.mjs';
import { fetchAuthSession as fetchAuthSession$1 } from '../internal/fetchAuthSession.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const fetchAuthSession = (contextSpec, options) => {
    return fetchAuthSession$1(getAmplifyServerContext(contextSpec).amplify, options);
};

export { fetchAuthSession };
//# sourceMappingURL=fetchAuthSession.mjs.map
