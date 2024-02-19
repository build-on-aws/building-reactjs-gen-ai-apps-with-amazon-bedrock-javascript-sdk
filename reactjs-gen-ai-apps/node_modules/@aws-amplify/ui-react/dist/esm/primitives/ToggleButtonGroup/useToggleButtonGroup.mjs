import * as React from 'react';
import { isFunction, isString } from '@aws-amplify/ui';

const useToggleButtonGroup = ({ onChange, value, isExclusive = false, isSelectionRequired = false, }) => {
    // Multiple selection
    const handleChange = React.useCallback((buttonValue) => {
        if (!isFunction(onChange) || !Array.isArray(value)) {
            return;
        }
        const index = isString(buttonValue) ? value.indexOf(buttonValue) : -1;
        let newValue;
        const shouldToggleOff = index >= 0;
        if (shouldToggleOff) {
            // Toggle off
            newValue = [...value];
            if (!isSelectionRequired || newValue.length > 1) {
                newValue.splice(index, 1);
            }
        }
        else {
            // Toggle on
            newValue = [...value, buttonValue];
        }
        onChange(newValue);
    }, [onChange, value, isSelectionRequired]);
    // Exclusive selection
    const handleExclusiveChange = React.useCallback((buttonValue) => {
        if (!isFunction(onChange)) {
            return;
        }
        onChange(value === buttonValue && !isSelectionRequired ? undefined : buttonValue);
    }, [onChange, value, isSelectionRequired]);
    return isExclusive ? handleExclusiveChange : handleChange;
};

export { useToggleButtonGroup };
