'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomString = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const getRandomBytes_1 = require("./getRandomBytes");
/**
 * Helper function to generate a random string
 * @returns {string} a random value.
 *
 * @internal
 */
const getRandomString = () => utils_1.base64Encoder.convert((0, getRandomBytes_1.getRandomBytes)(40));
exports.getRandomString = getRandomString;
//# sourceMappingURL=getRandomString.js.map
