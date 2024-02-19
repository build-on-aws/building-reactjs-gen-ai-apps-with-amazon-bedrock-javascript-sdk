'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = exports.setToken = void 0;
let token;
/**
 * Sets token.
 *
 * @internal
 */
const setToken = (newToken) => {
    token = newToken;
};
exports.setToken = setToken;
/**
 * Returns the current token.
 *
 * @internal
 */
const getToken = () => token;
exports.getToken = getToken;
//# sourceMappingURL=tokenManager.js.map
