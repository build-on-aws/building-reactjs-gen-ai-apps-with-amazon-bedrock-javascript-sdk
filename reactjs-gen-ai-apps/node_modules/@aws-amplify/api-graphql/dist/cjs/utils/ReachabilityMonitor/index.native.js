'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReachabilityMonitor = void 0;
const tslib_1 = require("tslib");
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const utils_1 = require("@aws-amplify/core/internals/utils");
const netinfo_1 = tslib_1.__importDefault(require("@react-native-community/netinfo"));
const ReachabilityMonitor = () => new utils_1.Reachability().networkMonitor(netinfo_1.default);
exports.ReachabilityMonitor = ReachabilityMonitor;
//# sourceMappingURL=index.native.js.map
