import * as React from 'react';
import { isFunction } from '@aws-amplify/ui';

const useToggleButton = ({ isPressed, defaultPressed, onClick, onChange, value, }) => {
    const isControlled = isPressed !== undefined;
    // Maintain internal selected state for uncontrolled component
    const [pressed, setPressed] = React.useState(defaultPressed);
    isPressed = isControlled ? isPressed : pressed;
    const handleClick = React.useCallback((event) => {
        if (isFunction(onClick)) {
            onClick(event);
        }
        if (!isControlled) {
            setPressed(!pressed);
        }
        if (isControlled && isFunction(onChange)) {
            onChange(value);
        }
    }, [isControlled, onClick, onChange, pressed, value]);
    return { isPressed, handleClick };
};

export { useToggleButton };
