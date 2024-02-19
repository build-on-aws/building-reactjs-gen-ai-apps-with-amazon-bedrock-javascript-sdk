'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSigningKey = void 0;
const constants_1 = require("../constants");
const dataHashHelpers_1 = require("./dataHashHelpers");
/**
 * Returns a signing key to be used for signing requests.
 *
 * @param secretAccessKey AWS secret access key from credentials.
 * @param date Current date in the format 'YYYYMMDD'.
 * @param region AWS region in which the service resides.
 * @param service Service to which the signed request is being sent.
 *
 * @returns `Uint8Array` calculated from its composite parts.
 *
 * @internal
 */
const getSigningKey = (secretAccessKey, date, region, service) => {
    const key = `${constants_1.SIGNATURE_IDENTIFIER}${secretAccessKey}`;
    const dateKey = (0, dataHashHelpers_1.getHashedData)(key, date);
    const regionKey = (0, dataHashHelpers_1.getHashedData)(dateKey, region);
    const serviceKey = (0, dataHashHelpers_1.getHashedData)(regionKey, service);
    const signingKey = (0, dataHashHelpers_1.getHashedData)(serviceKey, constants_1.KEY_TYPE_IDENTIFIER);
    return signingKey;
};
exports.getSigningKey = getSigningKey;
//# sourceMappingURL=getSigningKey.js.map
