import { loadGetRandomValues, loadBase64 } from '@aws-amplify/react-native';
import { AmplifyError } from '../../errors/AmplifyError.mjs';
import '../../types/errors.mjs';
import '../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
loadGetRandomValues();
const { encode, decode } = loadBase64();
const getCrypto = () => {
    if (typeof crypto !== 'undefined' &&
        typeof crypto.getRandomValues === 'function') {
        return crypto;
    }
    throw new AmplifyError({
        name: 'MissingPolyfill',
        message: 'Cannot resolve the `crypto` function from the environment.',
    });
};
const getBtoa = () => {
    return encode;
};
const getAtob = () => {
    return decode;
};

export { getAtob, getBtoa, getCrypto };
//# sourceMappingURL=index.native.mjs.map
