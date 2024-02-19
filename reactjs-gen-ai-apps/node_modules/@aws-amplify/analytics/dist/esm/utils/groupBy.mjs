// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const groupBy = (getGroupId, list) => {
    return list.reduce((result, current) => {
        const groupId = getGroupId(current);
        return { ...result, [groupId]: [...(result[groupId] ?? []), current] };
    }, {});
};

export { groupBy };
//# sourceMappingURL=groupBy.mjs.map
