'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserAttributes = void 0;
const adapter_core_1 = require("@aws-amplify/core/internals/adapter-core");
const fetchUserAttributes_1 = require("../internal/fetchUserAttributes");
const fetchUserAttributes = (contextSpec) => {
    return (0, fetchUserAttributes_1.fetchUserAttributes)((0, adapter_core_1.getAmplifyServerContext)(contextSpec).amplify);
};
exports.fetchUserAttributes = fetchUserAttributes;
//# sourceMappingURL=fetchUserAttributes.js.map
