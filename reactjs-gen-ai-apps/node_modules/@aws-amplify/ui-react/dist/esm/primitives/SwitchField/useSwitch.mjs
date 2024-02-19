import { useState, useCallback } from 'react';
import { isFunction } from '@aws-amplify/ui';

const useSwitch = (props) => {
    const { onChange, isChecked, defaultChecked, isDisabled } = props;
    const isControlled = typeof isChecked !== 'undefined';
    const [isOn, setIsOn] = useState(isControlled ? isChecked : !!defaultChecked);
    const [isFocused, setIsFocused] = useState(false);
    const changeHandler = useCallback((event) => {
        if (isDisabled) {
            event.preventDefault();
            return;
        }
        if (isFunction(onChange)) {
            onChange(event);
        }
        setIsOn(event.target.checked);
    }, [onChange, isDisabled]);
    if (isControlled && isOn !== isChecked) {
        setIsOn(isChecked);
    }
    return {
        isOn,
        changeHandler,
        isFocused,
        setIsFocused,
    };
};

export { useSwitch };
