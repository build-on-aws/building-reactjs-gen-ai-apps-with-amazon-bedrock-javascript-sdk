'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.textEncoder = void 0;
const react_native_1 = require("@aws-amplify/react-native");
exports.textEncoder = {
    convert(input) {
        const Buffer = (0, react_native_1.loadBuffer)();
        return new Buffer(input, 'utf8');
    },
};
//# sourceMappingURL=index.native.js.map
