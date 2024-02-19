import { Hub } from '@aws-amplify/core';
import { AMPLIFY_SYMBOL } from '@aws-amplify/core/internals/utils';
import { oAuthStore } from './oAuthStore.mjs';
import { resolveAndClearInflightPromises } from './inflightPromise.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const handleFailure = async (error) => {
    resolveAndClearInflightPromises();
    await oAuthStore.clearOAuthInflightData();
    Hub.dispatch('auth', { event: 'signInWithRedirect_failure', data: { error } }, 'Auth', AMPLIFY_SYMBOL);
};

export { handleFailure };
//# sourceMappingURL=handleFailure.mjs.map
