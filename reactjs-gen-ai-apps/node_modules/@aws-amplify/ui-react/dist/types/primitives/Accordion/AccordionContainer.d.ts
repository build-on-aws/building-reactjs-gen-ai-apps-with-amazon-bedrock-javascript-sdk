import { ForwardRefPrimitive } from '../types/view';
import { BaseAccordionProps } from './types';
type BaseAccordionContainerProps = Omit<BaseAccordionProps, 'items'>;
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/accordion)
 */
export declare const AccordionContainer: ForwardRefPrimitive<BaseAccordionContainerProps, 'div'>;
export {};
