import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';
import { AccordionContext, AccordionItemContext } from './AccordionContext.mjs';

const AccordionItemPrimitive = ({ children, className, value, as = 'details', ...rest }, ref) => {
    const context = React.useContext(AccordionContext);
    const open = value ? context?.value?.includes(value) : undefined;
    return (React.createElement(AccordionItemContext.Provider, { value: value },
        React.createElement(View, { ...rest, open: open, ref: ref, as: as, className: classNames(ComponentClassName.AccordionItem, className) }, children)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/accordion)
 */
const AccordionItem = primitiveWithForwardRef(AccordionItemPrimitive);
AccordionItem.displayName = 'AccordionItem';

export { AccordionItem };
