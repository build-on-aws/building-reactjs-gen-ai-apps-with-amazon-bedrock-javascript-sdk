'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
const groupBy = (getGroupId, list) => {
    return list.reduce((result, current) => {
        const groupId = getGroupId(current);
        return { ...result, [groupId]: [...(result[groupId] ?? []), current] };
    }, {});
};
exports.groupBy = groupBy;
//# sourceMappingURL=groupBy.js.map
