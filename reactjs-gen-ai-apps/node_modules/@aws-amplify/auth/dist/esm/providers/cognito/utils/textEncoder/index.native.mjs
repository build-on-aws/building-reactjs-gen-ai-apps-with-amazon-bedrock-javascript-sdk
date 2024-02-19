import { loadBuffer } from '@aws-amplify/react-native';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const textEncoder = {
    convert(input) {
        const Buffer = loadBuffer();
        return new Buffer(input, 'utf8');
    },
};

export { textEncoder };
//# sourceMappingURL=index.native.mjs.map
