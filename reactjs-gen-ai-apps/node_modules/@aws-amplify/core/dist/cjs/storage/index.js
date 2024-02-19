'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedInMemoryStorage = exports.sessionStorage = exports.defaultStorage = exports.CookieStorage = void 0;
const DefaultStorage_1 = require("./DefaultStorage");
const InMemoryStorage_1 = require("./InMemoryStorage");
const KeyValueStorage_1 = require("./KeyValueStorage");
const SessionStorage_1 = require("./SessionStorage");
var CookieStorage_1 = require("./CookieStorage");
Object.defineProperty(exports, "CookieStorage", { enumerable: true, get: function () { return CookieStorage_1.CookieStorage; } });
exports.defaultStorage = new DefaultStorage_1.DefaultStorage();
exports.sessionStorage = new SessionStorage_1.SessionStorage();
exports.sharedInMemoryStorage = new KeyValueStorage_1.KeyValueStorage(new InMemoryStorage_1.InMemoryStorage());
//# sourceMappingURL=index.js.map
