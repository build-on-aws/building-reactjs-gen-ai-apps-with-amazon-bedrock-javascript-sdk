// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import { useMemo, useState } from 'react';
import { filterOptions } from './utils/utils';
import { generateTestIndexes } from '../internal/components/options-list/utils/test-indexes';
import { useHighlightedOption, } from '../internal/components/options-list/utils/use-highlight-option';
const isHighlightable = (option) => {
    return !!option && option.type !== 'parent';
};
const isInteractive = (option) => !!option && !option.disabled && option.type !== 'parent';
export const useAutosuggestItems = ({ options, filterValue, filterText, filteringType, hideEnteredTextLabel, onSelectItem, }) => {
    const [showAll, setShowAll] = useState(false);
    const { items, getItemGroup } = useMemo(() => createItems(options), [options]);
    const filteredItems = useMemo(() => {
        const filteredItems = filteringType === 'auto' && !showAll ? filterOptions(items, filterText) : [...items];
        if (filterValue && !hideEnteredTextLabel) {
            filteredItems.unshift({ value: filterValue, type: 'use-entered', option: { value: filterValue } });
        }
        generateTestIndexes(filteredItems, getItemGroup);
        return filteredItems;
    }, [items, getItemGroup, filterValue, filterText, filteringType, showAll, hideEnteredTextLabel]);
    const [highlightedOptionState, highlightedOptionHandlers] = useHighlightedOption({
        options: filteredItems,
        isHighlightable,
    });
    const selectHighlightedOptionWithKeyboard = () => {
        if (highlightedOptionState.highlightedOption && isInteractive(highlightedOptionState.highlightedOption)) {
            onSelectItem(highlightedOptionState.highlightedOption);
            return true;
        }
        return false;
    };
    const highlightVisibleOptionWithMouse = (index) => {
        if (filteredItems[index] && isHighlightable(filteredItems[index])) {
            highlightedOptionHandlers.setHighlightedIndexWithMouse(index);
        }
    };
    const selectVisibleOptionWithMouse = (index) => {
        if (filteredItems[index] && isInteractive(filteredItems[index])) {
            onSelectItem(filteredItems[index]);
        }
    };
    return [
        Object.assign(Object.assign({}, highlightedOptionState), { items: filteredItems, showAll, getItemGroup }),
        Object.assign(Object.assign({}, highlightedOptionHandlers), { setShowAll,
            selectHighlightedOptionWithKeyboard,
            highlightVisibleOptionWithMouse,
            selectVisibleOptionWithMouse }),
    ];
};
function createItems(options) {
    const items = [];
    const itemToGroup = new WeakMap();
    const getItemGroup = (item) => itemToGroup.get(item);
    for (const option of options) {
        if (isGroup(option)) {
            for (const item of flattenGroup(option)) {
                items.push(item);
            }
        }
        else {
            items.push(Object.assign(Object.assign({}, option), { option }));
        }
    }
    function flattenGroup(group) {
        const { options } = group, rest = __rest(group, ["options"]);
        let hasOnlyDisabledChildren = true;
        const items = [Object.assign(Object.assign({}, rest), { type: 'parent', option: group })];
        for (const option of options) {
            if (!option.disabled) {
                hasOnlyDisabledChildren = false;
            }
            const childOption = Object.assign(Object.assign({}, option), { type: 'child', disabled: option.disabled || rest.disabled, option });
            items.push(childOption);
            itemToGroup.set(childOption, group);
        }
        items[0].disabled = items[0].disabled || hasOnlyDisabledChildren;
        return items;
    }
    return { items, getItemGroup };
}
function isGroup(optionOrGroup) {
    return 'options' in optionOrGroup;
}
//# sourceMappingURL=options-controller.js.map