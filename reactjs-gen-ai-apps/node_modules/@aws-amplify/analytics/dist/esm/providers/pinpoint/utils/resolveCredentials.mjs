import { fetchAuthSession } from '@aws-amplify/core';
import '@aws-amplify/core/internals/utils';
import { assertValidationError } from '../../../errors/assertValidationError.mjs';
import { AnalyticsValidationErrorCode } from '../../../errors/validation.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
const resolveCredentials = async () => {
    const { credentials, identityId } = await fetchAuthSession();
    assertValidationError(!!credentials, AnalyticsValidationErrorCode.NoCredentials);
    return { credentials, identityId };
};

export { resolveCredentials };
//# sourceMappingURL=resolveCredentials.mjs.map
