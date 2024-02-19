import { classNames, ComponentClassName, isString } from '@aws-amplify/ui';
import * as React from 'react';
import { Flex } from '../Flex/Flex.mjs';
import { useToggleButtonGroup } from './useToggleButtonGroup.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const ToggleButtonGroupPrimitive = ({ children, className, isExclusive, isSelectionRequired, onChange, size, value, variation, ...rest }, ref) => {
    const handleChange = useToggleButtonGroup({
        onChange,
        value,
        isExclusive,
        isSelectionRequired,
    });
    return (React.createElement(Flex, { className: classNames(ComponentClassName.ToggleButtonGroup, className), ref: ref, role: "group", ...rest }, React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                isPressed: isExclusive
                    ? value === child.props.value
                    : isString(child.props.value) &&
                        value.includes(child.props.value),
                onChange: handleChange,
                size,
                variation,
            });
        }
        return child;
    })));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/togglebutton#togglebuttongroup)
 */
const ToggleButtonGroup = primitiveWithForwardRef(ToggleButtonGroupPrimitive);
ToggleButtonGroup.displayName = 'ToggleButtonGroup';

export { ToggleButtonGroup };
