// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
const resolveLibraryOptions = (amplify) => {
    const headers = amplify.libraryOptions?.API?.GraphQL?.headers;
    const withCredentials = amplify.libraryOptions?.API?.GraphQL?.withCredentials;
    return { headers, withCredentials };
};

export { resolveLibraryOptions };
//# sourceMappingURL=resolveLibraryOptions.mjs.map
