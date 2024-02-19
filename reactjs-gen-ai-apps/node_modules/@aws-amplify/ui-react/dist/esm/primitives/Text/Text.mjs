import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier, classNameModifierByFlag } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const TextPrimitive = ({ as = 'p', className, children, isTruncated, variation, ...rest }, ref) => {
    const componentClasses = classNames(ComponentClassName.Text, classNameModifier(ComponentClassName.Text, variation), classNameModifierByFlag(ComponentClassName.Text, 'truncated', isTruncated), className);
    return (React.createElement(View, { as: as, className: componentClasses, ref: ref, ...rest }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/text)
 */
const Text = primitiveWithForwardRef(TextPrimitive);
Text.displayName = 'Text';

export { Text };
