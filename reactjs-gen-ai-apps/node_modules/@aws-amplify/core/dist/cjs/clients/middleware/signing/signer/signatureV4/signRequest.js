'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.signRequest = void 0;
const getSignedHeaders_1 = require("./utils/getSignedHeaders");
const getSigningValues_1 = require("./utils/getSigningValues");
const constants_1 = require("./constants");
const getSignature_1 = require("./utils/getSignature");
/**
 * Given a `HttpRequest`, returns a Signature Version 4 signed `HttpRequest`.
 *
 * @param request `HttpRequest` to be signed.
 * @param signRequestOptions `SignRequestOptions` object containing values used to construct the signature.
 * @returns A `HttpRequest` with authentication headers which can grant temporary access to AWS resources.
 */
const signRequest = (request, options) => {
    const signingValues = (0, getSigningValues_1.getSigningValues)(options);
    const { accessKeyId, credentialScope, longDate, sessionToken } = signingValues;
    // create the request to sign
    const headers = { ...request.headers };
    headers[constants_1.HOST_HEADER] = request.url.host;
    headers[constants_1.AMZ_DATE_HEADER] = longDate;
    if (sessionToken) {
        headers[constants_1.TOKEN_HEADER] = sessionToken;
    }
    const requestToSign = { ...request, headers };
    // calculate and add the signature to the request
    const signature = (0, getSignature_1.getSignature)(requestToSign, signingValues);
    const credentialEntry = `Credential=${accessKeyId}/${credentialScope}`;
    const signedHeadersEntry = `SignedHeaders=${(0, getSignedHeaders_1.getSignedHeaders)(headers)}`;
    const signatureEntry = `Signature=${signature}`;
    headers[constants_1.AUTH_HEADER] =
        `${constants_1.SHA256_ALGORITHM_IDENTIFIER} ${credentialEntry}, ${signedHeadersEntry}, ${signatureEntry}`;
    return requestToSign;
};
exports.signRequest = signRequest;
//# sourceMappingURL=signRequest.js.map
