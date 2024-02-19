'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.validateS3RequiredParameter = exports.serializePathnameObjectKey = exports.serializeObjectConfigsToHeaders = exports.assignStringVariables = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const aws_client_utils_1 = require("@aws-amplify/core/internals/aws-client-utils");
const utils_1 = require("@aws-amplify/core/internals/utils");
const StorageError_1 = require("../../../../../errors/StorageError");
/**
 * @internal
 */
const assignStringVariables = (values) => {
    const queryParams = {};
    for (const [key, value] of Object.entries(values)) {
        if (value != null) {
            queryParams[key] = value.toString();
        }
    }
    return queryParams;
};
exports.assignStringVariables = assignStringVariables;
/**
 * Serailize the parameters for configuring the S3 object. Currently used by
 * `putObject` and `createMultipartUpload` API.
 *
 * @internal
 */
const serializeObjectConfigsToHeaders = async (input) => ({
    ...(0, exports.assignStringVariables)({
        'x-amz-acl': input.ACL,
        'cache-control': input.CacheControl,
        'content-disposition': input.ContentDisposition,
        'content-language': input.ContentLanguage,
        'content-encoding': input.ContentEncoding,
        'content-type': input.ContentType,
        expires: input.Expires?.toUTCString(),
        'x-amz-tagging': input.Tagging,
        ...serializeMetadata(input.Metadata),
    }),
});
exports.serializeObjectConfigsToHeaders = serializeObjectConfigsToHeaders;
const serializeMetadata = (metadata = {}) => Object.keys(metadata).reduce((acc, suffix) => {
    acc[`x-amz-meta-${suffix.toLowerCase()}`] = metadata[suffix];
    return acc;
}, {});
/**
 * Serialize the object key to a URL pathname.
 * @see https://github.com/aws/aws-sdk-js-v3/blob/7ed7101dcc4e81038b6c7f581162b959e6b33a04/clients/client-s3/src/protocols/Aws_restXml.ts#L1108
 *
 * @internal
 */
const serializePathnameObjectKey = (url, key) => {
    return (url.pathname.replace(/\/$/, '') +
        `/${key.split('/').map(aws_client_utils_1.extendedEncodeURIComponent).join('/')}`);
};
exports.serializePathnameObjectKey = serializePathnameObjectKey;
function validateS3RequiredParameter(assertion, paramName) {
    if (!assertion) {
        throw new StorageError_1.StorageError({
            name: utils_1.AmplifyErrorCode.Unknown,
            message: 'An unknown error has occurred.',
            underlyingError: new TypeError(`Expected a non-null value for S3 parameter ${paramName}`),
            recoverySuggestion: 'This is likely to be a bug. Please reach out to library authors.',
        });
    }
}
exports.validateS3RequiredParameter = validateS3RequiredParameter;
//# sourceMappingURL=serializeHelpers.js.map
