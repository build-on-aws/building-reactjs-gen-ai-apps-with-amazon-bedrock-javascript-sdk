'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAuthSession = void 0;
const adapterCore_1 = require("../../../adapterCore");
const fetchAuthSession_1 = require("../internal/fetchAuthSession");
const fetchAuthSession = (contextSpec, options) => {
    return (0, fetchAuthSession_1.fetchAuthSession)((0, adapterCore_1.getAmplifyServerContext)(contextSpec).amplify, options);
};
exports.fetchAuthSession = fetchAuthSession;
//# sourceMappingURL=fetchAuthSession.js.map
