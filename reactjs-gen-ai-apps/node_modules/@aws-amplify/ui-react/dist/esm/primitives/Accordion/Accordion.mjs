import * as React from 'react';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { AccordionItem } from './AccordionItem.mjs';
import { AccordionContent } from './AccordionContent.mjs';
import { AccordionTrigger } from './AccordionTrigger.mjs';
import { AccordionIcon } from './AccordionIcon.mjs';
import { AccordionContainer } from './AccordionContainer.mjs';

const AccordionPrimitive = ({ items, ...rest }, ref) => {
    return (React.createElement(AccordionContainer, { ref: ref, ...rest }, items?.map(({ content, trigger, value }) => (React.createElement(AccordionItem, { key: value, value: value },
        React.createElement(AccordionTrigger, null,
            trigger,
            React.createElement(AccordionIcon, null)),
        React.createElement(AccordionContent, null, content))))));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/accordion)
 */
const Accordion = Object.assign(primitiveWithForwardRef(AccordionPrimitive), {
    Container: AccordionContainer,
    Content: AccordionContent,
    Icon: AccordionIcon,
    Item: AccordionItem,
    Trigger: AccordionTrigger,
});
Accordion.displayName = 'Accordion';

export { Accordion };
