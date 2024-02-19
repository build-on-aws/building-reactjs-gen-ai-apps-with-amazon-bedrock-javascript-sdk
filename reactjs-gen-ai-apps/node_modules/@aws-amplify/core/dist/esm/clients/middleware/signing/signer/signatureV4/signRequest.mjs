import { getSignedHeaders } from './utils/getSignedHeaders.mjs';
import { getSigningValues } from './utils/getSigningValues.mjs';
import { HOST_HEADER, AMZ_DATE_HEADER, TOKEN_HEADER, AUTH_HEADER, SHA256_ALGORITHM_IDENTIFIER } from './constants.mjs';
import { getSignature } from './utils/getSignature.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Given a `HttpRequest`, returns a Signature Version 4 signed `HttpRequest`.
 *
 * @param request `HttpRequest` to be signed.
 * @param signRequestOptions `SignRequestOptions` object containing values used to construct the signature.
 * @returns A `HttpRequest` with authentication headers which can grant temporary access to AWS resources.
 */
const signRequest = (request, options) => {
    const signingValues = getSigningValues(options);
    const { accessKeyId, credentialScope, longDate, sessionToken } = signingValues;
    // create the request to sign
    const headers = { ...request.headers };
    headers[HOST_HEADER] = request.url.host;
    headers[AMZ_DATE_HEADER] = longDate;
    if (sessionToken) {
        headers[TOKEN_HEADER] = sessionToken;
    }
    const requestToSign = { ...request, headers };
    // calculate and add the signature to the request
    const signature = getSignature(requestToSign, signingValues);
    const credentialEntry = `Credential=${accessKeyId}/${credentialScope}`;
    const signedHeadersEntry = `SignedHeaders=${getSignedHeaders(headers)}`;
    const signatureEntry = `Signature=${signature}`;
    headers[AUTH_HEADER] =
        `${SHA256_ALGORITHM_IDENTIFIER} ${credentialEntry}, ${signedHeadersEntry}, ${signatureEntry}`;
    return requestToSign;
};

export { signRequest };
//# sourceMappingURL=signRequest.mjs.map
