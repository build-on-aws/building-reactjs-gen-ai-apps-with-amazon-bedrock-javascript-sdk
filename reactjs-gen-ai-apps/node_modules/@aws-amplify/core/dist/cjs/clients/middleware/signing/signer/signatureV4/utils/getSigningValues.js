'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSigningValues = void 0;
const getCredentialScope_1 = require("./getCredentialScope");
const getFormattedDates_1 = require("./getFormattedDates");
/**
 * Extracts common values used for signing both requests and urls.
 *
 * @param options `SignRequestOptions` object containing values used to construct the signature.
 * @returns Common `SigningValues` used for signing.
 *
 * @internal
 */
const getSigningValues = ({ credentials, signingDate = new Date(), signingRegion, signingService, uriEscapePath = true, }) => {
    // get properties from credentials
    const { accessKeyId, secretAccessKey, sessionToken } = credentials;
    // get formatted dates for signing
    const { longDate, shortDate } = (0, getFormattedDates_1.getFormattedDates)(signingDate);
    // copy header and set signing properties
    const credentialScope = (0, getCredentialScope_1.getCredentialScope)(shortDate, signingRegion, signingService);
    return {
        accessKeyId,
        credentialScope,
        longDate,
        secretAccessKey,
        sessionToken,
        shortDate,
        signingRegion,
        signingService,
        uriEscapePath,
    };
};
exports.getSigningValues = getSigningValues;
//# sourceMappingURL=getSigningValues.js.map
