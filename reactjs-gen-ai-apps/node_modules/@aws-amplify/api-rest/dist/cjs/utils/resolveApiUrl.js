'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveApiUrl = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const errors_1 = require("../errors");
/**
 * Resolve the REST API request URL by:
 * 1. Loading the REST API endpoint from the Amplify configuration with corresponding API name.
 * 2. Appending the path to the endpoint.
 * 3. Merge the query parameters from path and the queryParameter argument which is taken from the public REST API
 *   options.
 * 4. Validating the resulting URL string.
 *
 * @internal
 */
const resolveApiUrl = (amplify, apiName, path, queryParams) => {
    const urlStr = amplify.getConfig()?.API?.REST?.[apiName]?.endpoint;
    (0, errors_1.assertValidationError)(!!urlStr, errors_1.RestApiValidationErrorCode.InvalidApiName);
    try {
        const url = new utils_1.AmplifyUrl(urlStr + path);
        if (queryParams) {
            const mergedQueryParams = new utils_1.AmplifyUrlSearchParams(url.searchParams);
            Object.entries(queryParams).forEach(([key, value]) => {
                mergedQueryParams.set(key, value);
            });
            url.search = new utils_1.AmplifyUrlSearchParams(mergedQueryParams).toString();
        }
        return url;
    }
    catch (error) {
        throw new errors_1.RestApiError({
            name: errors_1.RestApiValidationErrorCode.InvalidApiName,
            ...errors_1.validationErrorMap[errors_1.RestApiValidationErrorCode.InvalidApiName],
            recoverySuggestion: `Please make sure the REST endpoint URL is a valid URL string. Got ${urlStr}`,
        });
    }
};
exports.resolveApiUrl = resolveApiUrl;
//# sourceMappingURL=resolveApiUrl.js.map
