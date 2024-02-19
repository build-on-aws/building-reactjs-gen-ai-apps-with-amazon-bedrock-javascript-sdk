'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytesToString = void 0;
function bytesToString(input) {
    return Array.from(input, byte => String.fromCodePoint(byte)).join('');
}
exports.bytesToString = bytesToString;
//# sourceMappingURL=bytesToString.js.map
