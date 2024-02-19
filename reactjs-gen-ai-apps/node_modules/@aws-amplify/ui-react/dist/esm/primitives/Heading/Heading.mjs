import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier, classNameModifierByFlag } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const headingLevels = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
};
const HeadingPrimitive = ({ className, children, isTruncated, level = 6, ...rest }, ref) => (React.createElement(View, { as: headingLevels[level], className: classNames(ComponentClassName.Heading, classNameModifier(ComponentClassName.Heading, level), classNameModifierByFlag(ComponentClassName.Heading, 'truncated', isTruncated), className), ref: ref, ...rest }, children));
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/heading)
 */
const Heading = primitiveWithForwardRef(HeadingPrimitive);
Heading.displayName = 'Heading';

export { Heading };
