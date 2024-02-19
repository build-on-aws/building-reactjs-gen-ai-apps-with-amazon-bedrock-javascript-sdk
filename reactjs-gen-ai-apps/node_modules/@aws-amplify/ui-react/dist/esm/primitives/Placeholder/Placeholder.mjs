import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const PlaceholderPrimitive = ({ className, children, isLoaded, size, ...rest }, ref) => {
    if (isLoaded) {
        return React.createElement(React.Fragment, null, children);
    }
    return (React.createElement(View, { className: classNames(ComponentClassName.Placeholder, classNameModifier(ComponentClassName.Placeholder, size), className), ref: ref, ...rest }));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/placeholder)
 */
const Placeholder = primitiveWithForwardRef(PlaceholderPrimitive);
Placeholder.displayName = 'Placeholder';

export { Placeholder };
