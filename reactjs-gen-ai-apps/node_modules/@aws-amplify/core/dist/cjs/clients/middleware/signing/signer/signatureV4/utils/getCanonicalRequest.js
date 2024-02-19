'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCanonicalRequest = void 0;
const getCanonicalHeaders_1 = require("./getCanonicalHeaders");
const getCanonicalQueryString_1 = require("./getCanonicalQueryString");
const getCanonicalUri_1 = require("./getCanonicalUri");
const getHashedPayload_1 = require("./getHashedPayload");
const getSignedHeaders_1 = require("./getSignedHeaders");
/**
 * Returns a canonical request.
 *
 * @param request `HttpRequest` from which to create the canonical request from.
 * @param uriEscapePath Whether to uri encode the path as part of canonical uri. It's used for S3 only where the
 *   pathname is already uri encoded, and the signing process is not expected to uri encode it again. Defaults to true.
 * @returns String created by by concatenating the following strings, separated by newline characters:
 * - HTTPMethod
 * - CanonicalUri
 * - CanonicalQueryString
 * - CanonicalHeaders
 * - SignedHeaders
 * - HashedPayload
 *
 * @internal
 */
const getCanonicalRequest = ({ body, headers, method, url }, uriEscapePath = true) => [
    method,
    (0, getCanonicalUri_1.getCanonicalUri)(url.pathname, uriEscapePath),
    (0, getCanonicalQueryString_1.getCanonicalQueryString)(url.searchParams),
    (0, getCanonicalHeaders_1.getCanonicalHeaders)(headers),
    (0, getSignedHeaders_1.getSignedHeaders)(headers),
    (0, getHashedPayload_1.getHashedPayload)(body),
].join('\n');
exports.getCanonicalRequest = getCanonicalRequest;
//# sourceMappingURL=getCanonicalRequest.js.map
