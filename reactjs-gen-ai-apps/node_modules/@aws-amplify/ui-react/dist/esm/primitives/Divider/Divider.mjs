import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import * as React from 'react';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';

const DividerPrimitive = ({ className, orientation = 'horizontal', size, label, ...rest }, ref) => {
    const componentClasses = classNames(ComponentClassName.Divider, classNameModifier(ComponentClassName.Divider, orientation), classNameModifier(ComponentClassName.Divider, size), className);
    return (React.createElement(View, { "aria-orientation": orientation, as: "hr", className: componentClasses, "data-label": label, ref: ref, ...rest }));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/divider)
 */
const Divider = primitiveWithForwardRef(DividerPrimitive);
Divider.displayName = 'Divider';

export { Divider };
