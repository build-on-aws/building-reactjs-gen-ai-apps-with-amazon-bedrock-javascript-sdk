'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateState = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const generateState = () => {
    return (0, utils_1.generateRandomString)(32);
};
exports.generateState = generateState;
//# sourceMappingURL=generateState.js.map
