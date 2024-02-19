import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';

const FieldGroupIconPrimitive = ({ className, children, isVisible = true, excludeFromTabOrder = false, ...rest }, ref) => {
    return isVisible ? (React.createElement(View, { className: classNames(ComponentClassName.FieldGroupIcon, className), ref: ref, tabIndex: excludeFromTabOrder ? -1 : undefined, ...rest }, children)) : null;
};
const FieldGroupIcon = primitiveWithForwardRef(FieldGroupIconPrimitive);
FieldGroupIcon.displayName = 'FieldGroupIcon';

export { FieldGroupIcon };
