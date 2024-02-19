import { Amplify } from '@aws-amplify/core';
import { isBrowser, ADD_OAUTH_LISTENER } from '@aws-amplify/core/internals/utils';
import { attemptCompleteOAuthFlow } from './attemptCompleteOAuthFlow.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// attach the side effect for handling the completion of an inflight oauth flow
// this side effect works only on Web
isBrowser() &&
    (() => {
        // add the listener to the singleton for triggering
        Amplify[ADD_OAUTH_LISTENER](attemptCompleteOAuthFlow);
    })();
//# sourceMappingURL=enableOAuthListener.mjs.map
