import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';

const BadgePrimitive = ({ className, children, variation, size, ...rest }, ref) => {
    const componentClasses = classNames(ComponentClassName.Badge, className, classNameModifier(ComponentClassName.Badge, variation), classNameModifier(ComponentClassName.Badge, size));
    return (React.createElement(View, { as: "span", className: componentClasses, ref: ref, ...rest }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/badge)
 */
const Badge = primitiveWithForwardRef(BadgePrimitive);
Badge.displayName = 'Badge';

export { Badge };
