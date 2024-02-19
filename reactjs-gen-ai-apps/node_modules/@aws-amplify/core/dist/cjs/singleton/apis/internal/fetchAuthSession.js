'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAuthSession = void 0;
const fetchAuthSession = (amplify, options) => {
    return amplify.Auth.fetchAuthSession(options);
};
exports.fetchAuthSession = fetchAuthSession;
//# sourceMappingURL=fetchAuthSession.js.map
