'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStorage = void 0;
const KeyValueStorage_1 = require("./KeyValueStorage");
const utils_1 = require("./utils");
/**
 * @internal
 */
class SessionStorage extends KeyValueStorage_1.KeyValueStorage {
    constructor() {
        super((0, utils_1.getSessionStorageWithFallback)());
    }
}
exports.SessionStorage = SessionStorage;
//# sourceMappingURL=SessionStorage.js.map
