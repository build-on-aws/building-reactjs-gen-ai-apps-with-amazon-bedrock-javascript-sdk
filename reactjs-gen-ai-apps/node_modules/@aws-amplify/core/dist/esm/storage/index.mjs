import { DefaultStorage } from './DefaultStorage.mjs';
import { InMemoryStorage } from './InMemoryStorage.mjs';
import { KeyValueStorage } from './KeyValueStorage.mjs';
import { SessionStorage } from './SessionStorage.mjs';
export { CookieStorage } from './CookieStorage.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const defaultStorage = new DefaultStorage();
const sessionStorage = new SessionStorage();
const sharedInMemoryStorage = new KeyValueStorage(new InMemoryStorage());

export { defaultStorage, sessionStorage, sharedInMemoryStorage };
//# sourceMappingURL=index.mjs.map
