import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const FlexPrimitive = ({ className, children, ...rest }, ref) => (React.createElement(View, { className: classNames(ComponentClassName.Flex, className), ref: ref, ...rest }, children));
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/flex)
 */
const Flex = primitiveWithForwardRef(FlexPrimitive);
Flex.displayName = 'Flex';

export { Flex };
