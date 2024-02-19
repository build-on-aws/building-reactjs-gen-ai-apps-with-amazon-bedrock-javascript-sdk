import { KeyValueStorage } from './KeyValueStorage.mjs';
import { getSessionStorageWithFallback } from './utils.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class SessionStorage extends KeyValueStorage {
    constructor() {
        super(getSessionStorageWithFallback());
    }
}

export { SessionStorage };
//# sourceMappingURL=SessionStorage.mjs.map
