import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const VisuallyHiddenPrimitive = ({ as = 'span', children, className, ...rest }, ref) => (React.createElement(View, { as: as, className: classNames(ComponentClassName.VisuallyHidden, className), ref: ref, ...rest }, children));
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/visuallyhidden)
 */
const VisuallyHidden = primitiveWithForwardRef(VisuallyHiddenPrimitive);
VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };
