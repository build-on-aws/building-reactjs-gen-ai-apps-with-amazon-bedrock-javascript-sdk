'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.amplifyUuid = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const react_native_1 = require("@aws-amplify/react-native");
const uuid_1 = require("uuid");
(0, react_native_1.loadGetRandomValues)();
const amplifyUuid = uuid_1.v4;
exports.amplifyUuid = amplifyUuid;
//# sourceMappingURL=index.native.js.map
