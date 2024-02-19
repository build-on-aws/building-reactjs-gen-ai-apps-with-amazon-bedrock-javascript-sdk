// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
import { KeyCode } from '../../internal/keycode';
import { filterOptions, isInteractive, isGroupInteractive, isGroup, } from '../../internal/components/option/utils/filter-options';
import { useDebounceCallback } from '../../internal/hooks/use-debounce-callback';
export const isChar = (keyCode) => {
    return [0, KeyCode.enter, KeyCode.space, KeyCode.tab].indexOf(keyCode) === -1;
};
export const isRepeatedChar = (str) => str.split('').every(c => c === str[0]);
function findMatchingOption(options, searchText, currentHighlight, useInteractiveGroups) {
    const interactivityCheck = useInteractiveGroups ? isGroupInteractive : isInteractive;
    const filter = (searchText) => filterOptions(options, searchText, true).filter(option => interactivityCheck(option));
    const matchingOptions = filter(searchText);
    if (matchingOptions.length === 1) {
        return matchingOptions[0];
    }
    // Hit the same char over and over, we assume they want to cycle through
    if (currentHighlight && searchText.length > 1 && isRepeatedChar(searchText)) {
        const matchingOptions = filter(searchText[0]);
        if (matchingOptions.length > 0) {
            //handling OptionGroups when useInteractiveGroups is set
            let active = isGroup(currentHighlight)
                ? matchingOptions.map(({ option }) => option).indexOf(currentHighlight)
                : matchingOptions
                    .map(({ option }) => option.value)
                    .indexOf(currentHighlight.value);
            // Pick the next thing (if something with this prefix wasn't selected
            // we'll end up with the first option)
            active += 1;
            active = active % matchingOptions.length;
            return matchingOptions[active];
        }
    }
    // We have multiple things that start with this prefix.  Based on the
    // behavior of native select, this is considered after the repeated case
    if (matchingOptions.length > 0) {
        return matchingOptions[0];
    }
    return null;
}
export function useNativeSearch({ isEnabled, options, highlightOption, highlightedOption, useInteractiveGroups, }) {
    const value = useRef('');
    const delayedResetValue = useDebounceCallback(() => (value.current = ''), 500);
    return (event) => {
        if (!isEnabled) {
            return;
        }
        const { charCode } = event;
        if (!isChar(charCode)) {
            return;
        }
        delayedResetValue();
        const newValue = value.current + String.fromCharCode(charCode);
        value.current = newValue;
        const nextHighlight = findMatchingOption(options, newValue, highlightedOption, useInteractiveGroups);
        if (nextHighlight) {
            highlightOption(nextHighlight);
        }
    };
}
//# sourceMappingURL=use-native-search.js.map