import { BaseAccordionProps } from './types';
import { ForwardRefPrimitive } from '../types/view';
import { AccordionItem } from './AccordionItem';
import { AccordionContent } from './AccordionContent';
import { AccordionTrigger } from './AccordionTrigger';
import { AccordionIcon } from './AccordionIcon';
import { AccordionContainer } from './AccordionContainer';
type AccordionType = ForwardRefPrimitive<BaseAccordionProps, 'div'> & {
    Container: typeof AccordionContainer;
    Content: typeof AccordionContent;
    Icon: typeof AccordionIcon;
    Item: typeof AccordionItem;
    Trigger: typeof AccordionTrigger;
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/accordion)
 */
declare const Accordion: AccordionType;
export { Accordion };
