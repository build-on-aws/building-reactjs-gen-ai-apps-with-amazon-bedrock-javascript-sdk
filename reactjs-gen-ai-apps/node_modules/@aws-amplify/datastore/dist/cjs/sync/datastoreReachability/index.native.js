'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReachabilityMonitor = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const utils_1 = require("@aws-amplify/core/internals/utils");
const react_native_1 = require("@aws-amplify/react-native");
exports.ReachabilityMonitor = new utils_1.Reachability().networkMonitor((0, react_native_1.loadNetInfo)());
//# sourceMappingURL=index.native.js.map
