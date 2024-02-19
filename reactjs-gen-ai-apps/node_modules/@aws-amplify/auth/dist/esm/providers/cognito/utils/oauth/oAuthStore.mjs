import { defaultStorage } from '@aws-amplify/core';
import { DefaultOAuthStore } from '../signInWithRedirectStore.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const oAuthStore = new DefaultOAuthStore(defaultStorage);

export { oAuthStore };
//# sourceMappingURL=oAuthStore.mjs.map
