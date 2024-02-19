import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';

const AccordionContentPrimitive = ({ className, children, ...rest }, ref) => {
    return (React.createElement(View, { ...rest, className: classNames(ComponentClassName.AccordionItemContent, className), ref: ref }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/accordion)
 */
const AccordionContent = primitiveWithForwardRef(AccordionContentPrimitive);
AccordionContent.displayName = 'Accordion.Content';

export { AccordionContent };
