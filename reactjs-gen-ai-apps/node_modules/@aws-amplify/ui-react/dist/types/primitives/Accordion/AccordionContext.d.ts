import * as React from 'react';
type AccordionContextProps = {
    value?: string[];
    setValue?: (value: string) => void;
} | undefined;
export declare const AccordionContext: React.Context<AccordionContextProps>;
type AccordionItemContextProps = string | undefined;
export declare const AccordionItemContext: React.Context<AccordionItemContextProps>;
export {};
