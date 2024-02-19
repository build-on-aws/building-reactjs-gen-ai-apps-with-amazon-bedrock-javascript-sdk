import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const LabelPrimitive = ({ children, className, visuallyHidden, ...rest }, ref) => {
    return (React.createElement(View, { as: "label", className: classNames(ComponentClassName.Label, className, {
            [ComponentClassName.VisuallyHidden]: visuallyHidden,
        }), ref: ref, ...rest }, children));
};
const Label = primitiveWithForwardRef(LabelPrimitive);
Label.displayName = 'Label';

export { Label };
