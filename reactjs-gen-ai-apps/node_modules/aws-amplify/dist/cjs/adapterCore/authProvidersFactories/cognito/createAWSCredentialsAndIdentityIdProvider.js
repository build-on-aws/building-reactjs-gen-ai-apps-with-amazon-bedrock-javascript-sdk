'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAWSCredentialsAndIdentityIdProvider = void 0;
const cognito_1 = require("@aws-amplify/auth/cognito");
/**
 * Creates a instance of {@link CognitoAWSCredentialsAndIdentityIdProvider} using
 * the provided `keyValueStorage`.
 * @param authConfig The Auth config that the credentials provider needs to function.
 * @param keyValueStorage An object that implements the {@link KeyValueStorageInterface}.
 * @returns An instance of {@link CognitoAWSCredentialsAndIdentityIdProvider}.
 */
const createAWSCredentialsAndIdentityIdProvider = (authConfig, keyValueStorage) => {
    const credentialsProvider = new cognito_1.CognitoAWSCredentialsAndIdentityIdProvider(new cognito_1.DefaultIdentityIdStore(keyValueStorage));
    return credentialsProvider;
};
exports.createAWSCredentialsAndIdentityIdProvider = createAWSCredentialsAndIdentityIdProvider;
//# sourceMappingURL=createAWSCredentialsAndIdentityIdProvider.js.map
