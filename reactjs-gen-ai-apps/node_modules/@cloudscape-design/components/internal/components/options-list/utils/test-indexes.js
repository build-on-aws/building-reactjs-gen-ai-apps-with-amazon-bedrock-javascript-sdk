const testIndexMap = new WeakMap();
//retrieves the test indexes of the option for the findOption and findOptionInGroup test-utils
export const getTestOptionIndexes = (item) => testIndexMap.get(item);
export const generateTestIndexes = (filteredItems, getParentGroup) => {
    let throughIndex = 1;
    let groupIndex = 0;
    let inGroupIndex = 1;
    let currentGroup = null;
    filteredItems.forEach(item => {
        if (!('type' in item)) {
            testIndexMap.set(item, { throughIndex: throughIndex++ });
        }
        else if (item.type === 'child') {
            const parentGroup = getParentGroup(item);
            if (parentGroup && parentGroup !== currentGroup) {
                currentGroup = parentGroup;
                inGroupIndex = 1;
                testIndexMap.set(item, {
                    throughIndex: throughIndex++,
                    groupIndex: ++groupIndex,
                    inGroupIndex: inGroupIndex++,
                });
            }
            else {
                testIndexMap.set(item, { throughIndex: throughIndex++, groupIndex, inGroupIndex: inGroupIndex++ });
            }
        }
    });
};
//# sourceMappingURL=test-indexes.js.map