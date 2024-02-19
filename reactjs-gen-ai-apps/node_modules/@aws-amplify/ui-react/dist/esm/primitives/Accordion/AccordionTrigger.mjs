import * as React from 'react';
import { classNames, ComponentClassName, isTypedFunction } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';
import { AccordionContext, AccordionItemContext } from './AccordionContext.mjs';

const AccordionTriggerPrimitive = ({ children, className, ...rest }, ref) => {
    const context = React.useContext(AccordionContext);
    const value = React.useContext(AccordionItemContext);
    const handleOnClick = (e) => {
        if (isTypedFunction(rest.onClick)) {
            rest.onClick(e);
        }
        if (context?.setValue && value) {
            e.preventDefault();
            context.setValue(value);
        }
    };
    return (React.createElement(View, { ...rest, ref: ref, as: "summary", className: classNames(ComponentClassName.AccordionItemTrigger, className), onClick: handleOnClick }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/accordion)
 */
const AccordionTrigger = primitiveWithForwardRef(AccordionTriggerPrimitive);
AccordionTrigger.displayName = 'Accordion.Trigger';

export { AccordionTrigger };
