// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
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

export { haveCredentialsChanged };
//# sourceMappingURL=haveCredentialsChanged.mjs.map
