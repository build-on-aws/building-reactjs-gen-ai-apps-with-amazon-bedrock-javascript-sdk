import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import * as React from 'react';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const CardPrimitive = ({ className, children, variation, ...rest }, ref) => {
    return (React.createElement(View, { className: classNames(ComponentClassName.Card, classNameModifier(ComponentClassName.Card, variation), className), ref: ref, ...rest }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/card)
 */
const Card = primitiveWithForwardRef(CardPrimitive);
Card.displayName = 'Card';

export { Card };
