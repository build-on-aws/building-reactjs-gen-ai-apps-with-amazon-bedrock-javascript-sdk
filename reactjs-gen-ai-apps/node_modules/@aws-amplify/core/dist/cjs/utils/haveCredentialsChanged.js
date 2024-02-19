'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.haveCredentialsChanged = void 0;
/**
 * Utility for determining if credentials have changed.
 *
 * @internal
 */
const haveCredentialsChanged = (cachedCredentials, credentials) => {
    return (cachedCredentials.accessKeyId !== credentials.accessKeyId ||
        cachedCredentials.sessionToken !== credentials.sessionToken ||
        cachedCredentials.secretAccessKey !== credentials.secretAccessKey);
};
exports.haveCredentialsChanged = haveCredentialsChanged;
//# sourceMappingURL=haveCredentialsChanged.js.map
