'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveEndpointId = void 0;
const errors_1 = require("../../../errors");
const types_1 = require("../../../types");
const updateEndpoint_1 = require("../apis/updateEndpoint");
const getEndpointId_1 = require("./getEndpointId");
/**
 * Resolves an endpoint id from cache or prepare via updateEndpoint if one does not already exist,
 * which will generate and cache an endpoint id between calls.
 *
 * @internal
 */
const resolveEndpointId = async ({ address, appId, category, channelType, credentials, identityId, region, userAgentValue, }) => {
    let endpointId = await (0, getEndpointId_1.getEndpointId)(appId, category);
    if (!endpointId) {
        await (0, updateEndpoint_1.updateEndpoint)({
            address,
            appId,
            category,
            channelType,
            credentials,
            identityId,
            region,
            userAgentValue,
        });
        endpointId = await (0, getEndpointId_1.getEndpointId)(appId, category);
    }
    (0, errors_1.assert)(!!endpointId, types_1.AmplifyErrorCode.NoEndpointId);
    return endpointId;
};
exports.resolveEndpointId = resolveEndpointId;
//# sourceMappingURL=resolveEndpointId.js.map
