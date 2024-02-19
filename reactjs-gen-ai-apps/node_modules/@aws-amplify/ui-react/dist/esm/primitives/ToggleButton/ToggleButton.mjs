import { classNames, ComponentClassName, classNameModifier, classNameModifierByFlag } from '@aws-amplify/ui';
import * as React from 'react';
import { Button } from '../Button/Button.mjs';
import { useToggleButton } from './useToggleButton.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const ToggleButtonPrimitive = ({ className, children, defaultPressed = false, isDisabled, isPressed: isPressedProp, onChange, onClick, size, value, variation, ...rest }, ref) => {
    const { isPressed, handleClick } = useToggleButton({
        isPressed: isPressedProp,
        defaultPressed,
        onChange,
        onClick,
        value,
    });
    const componentClasses = classNames(ComponentClassName.ToggleButton, classNameModifier(ComponentClassName.ToggleButton, variation), classNameModifierByFlag(ComponentClassName.ToggleButton, 'pressed', isPressed), className);
    return (React.createElement(Button, { "aria-pressed": isPressed, className: componentClasses, isDisabled: isDisabled, onClick: handleClick, ref: ref, size: size, type: "button", variation: variation, ...rest }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/togglebutton)
 */
const ToggleButton = primitiveWithForwardRef(ToggleButtonPrimitive);
ToggleButton.displayName = 'ToggleButton';

export { ToggleButton };
