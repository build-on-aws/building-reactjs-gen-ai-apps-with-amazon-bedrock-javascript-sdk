import { KeyValueStorage } from './KeyValueStorage.mjs';
import { getLocalStorageWithFallback } from './utils.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class DefaultStorage extends KeyValueStorage {
    constructor() {
        super(getLocalStorageWithFallback());
    }
}

export { DefaultStorage };
//# sourceMappingURL=DefaultStorage.mjs.map
