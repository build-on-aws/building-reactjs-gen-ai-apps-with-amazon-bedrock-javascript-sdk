import { CognitoAWSCredentialsAndIdentityIdProvider, DefaultIdentityIdStore } from '@aws-amplify/auth/cognito';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Creates a instance of {@link CognitoAWSCredentialsAndIdentityIdProvider} using
 * the provided `keyValueStorage`.
 * @param authConfig The Auth config that the credentials provider needs to function.
 * @param keyValueStorage An object that implements the {@link KeyValueStorageInterface}.
 * @returns An instance of {@link CognitoAWSCredentialsAndIdentityIdProvider}.
 */
const createAWSCredentialsAndIdentityIdProvider = (authConfig, keyValueStorage) => {
    const credentialsProvider = new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(keyValueStorage));
    return credentialsProvider;
};

export { createAWSCredentialsAndIdentityIdProvider };
//# sourceMappingURL=createAWSCredentialsAndIdentityIdProvider.mjs.map
