'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveLibraryOptions = void 0;
/**
 * @internal
 */
const resolveLibraryOptions = (amplify) => {
    const headers = amplify.libraryOptions?.API?.GraphQL?.headers;
    const withCredentials = amplify.libraryOptions?.API?.GraphQL?.withCredentials;
    return { headers, withCredentials };
};
exports.resolveLibraryOptions = resolveLibraryOptions;
//# sourceMappingURL=resolveLibraryOptions.js.map
