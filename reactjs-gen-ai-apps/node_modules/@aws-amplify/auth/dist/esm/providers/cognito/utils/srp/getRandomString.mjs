import { base64Encoder } from '@aws-amplify/core/internals/utils';
import { getRandomBytes } from './getRandomBytes.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Helper function to generate a random string
 * @returns {string} a random value.
 *
 * @internal
 */
const getRandomString = () => base64Encoder.convert(getRandomBytes(40));

export { getRandomString };
//# sourceMappingURL=getRandomString.mjs.map
