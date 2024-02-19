import { extendedEncodeURIComponent } from '@aws-amplify/core/internals/aws-client-utils';
import { AmplifyErrorCode } from '@aws-amplify/core/internals/utils';
import { StorageError } from '../../../../../errors/StorageError.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
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
/**
 * Serailize the parameters for configuring the S3 object. Currently used by
 * `putObject` and `createMultipartUpload` API.
 *
 * @internal
 */
const serializeObjectConfigsToHeaders = async (input) => ({
    ...assignStringVariables({
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
        `/${key.split('/').map(extendedEncodeURIComponent).join('/')}`);
};
function validateS3RequiredParameter(assertion, paramName) {
    if (!assertion) {
        throw new StorageError({
            name: AmplifyErrorCode.Unknown,
            message: 'An unknown error has occurred.',
            underlyingError: new TypeError(`Expected a non-null value for S3 parameter ${paramName}`),
            recoverySuggestion: 'This is likely to be a bug. Please reach out to library authors.',
        });
    }
}

export { assignStringVariables, serializeObjectConfigsToHeaders, serializePathnameObjectKey, validateS3RequiredParameter };
//# sourceMappingURL=serializeHelpers.mjs.map
