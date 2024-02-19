'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCredentials = void 0;
const Amplify_1 = require("../Amplify");
function clearCredentials() {
    return Amplify_1.Amplify.Auth.clearCredentials();
}
exports.clearCredentials = clearCredentials;
//# sourceMappingURL=clearCredentials.js.map
