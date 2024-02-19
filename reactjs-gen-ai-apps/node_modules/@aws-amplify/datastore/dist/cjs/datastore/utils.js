'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNode = void 0;
const isNode = () => typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.node != null;
exports.isNode = isNode;
//# sourceMappingURL=utils.js.map
