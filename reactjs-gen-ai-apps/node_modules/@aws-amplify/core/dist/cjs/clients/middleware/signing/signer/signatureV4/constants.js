'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSIGNED_PAYLOAD = exports.EMPTY_HASH = exports.SIGNATURE_IDENTIFIER = exports.SHA256_ALGORITHM_IDENTIFIER = exports.KEY_TYPE_IDENTIFIER = exports.TOKEN_HEADER = exports.AMZ_DATE_HEADER = exports.HOST_HEADER = exports.AUTH_HEADER = exports.TOKEN_QUERY_PARAM = exports.SIGNED_HEADERS_QUERY_PARAM = exports.SIGNATURE_QUERY_PARAM = exports.REGION_SET_PARAM = exports.EXPIRES_QUERY_PARAM = exports.CREDENTIAL_QUERY_PARAM = exports.AMZ_DATE_QUERY_PARAM = exports.ALGORITHM_QUERY_PARAM = void 0;
// query params
exports.ALGORITHM_QUERY_PARAM = 'X-Amz-Algorithm';
exports.AMZ_DATE_QUERY_PARAM = 'X-Amz-Date';
exports.CREDENTIAL_QUERY_PARAM = 'X-Amz-Credential';
exports.EXPIRES_QUERY_PARAM = 'X-Amz-Expires';
exports.REGION_SET_PARAM = 'X-Amz-Region-Set';
exports.SIGNATURE_QUERY_PARAM = 'X-Amz-Signature';
exports.SIGNED_HEADERS_QUERY_PARAM = 'X-Amz-SignedHeaders';
exports.TOKEN_QUERY_PARAM = 'X-Amz-Security-Token';
// headers
exports.AUTH_HEADER = 'authorization';
exports.HOST_HEADER = 'host';
exports.AMZ_DATE_HEADER = exports.AMZ_DATE_QUERY_PARAM.toLowerCase();
exports.TOKEN_HEADER = exports.TOKEN_QUERY_PARAM.toLowerCase();
// identifiers
exports.KEY_TYPE_IDENTIFIER = 'aws4_request';
exports.SHA256_ALGORITHM_IDENTIFIER = 'AWS4-HMAC-SHA256';
exports.SIGNATURE_IDENTIFIER = 'AWS4';
// preset values
exports.EMPTY_HASH = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
exports.UNSIGNED_PAYLOAD = 'UNSIGNED-PAYLOAD';
//# sourceMappingURL=constants.js.map
