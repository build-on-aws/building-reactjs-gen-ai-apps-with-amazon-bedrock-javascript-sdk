'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@aws-amplify/core");
const utils_1 = require("@aws-amplify/core/internals/utils");
const attemptCompleteOAuthFlow_1 = require("./attemptCompleteOAuthFlow");
// attach the side effect for handling the completion of an inflight oauth flow
// this side effect works only on Web
(0, utils_1.isBrowser)() &&
    (() => {
        // add the listener to the singleton for triggering
        core_1.Amplify[utils_1.ADD_OAUTH_LISTENER](attemptCompleteOAuthFlow_1.attemptCompleteOAuthFlow);
    })();
//# sourceMappingURL=enableOAuthListener.js.map
