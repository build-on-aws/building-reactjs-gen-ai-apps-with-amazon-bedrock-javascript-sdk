/// <reference types="react" />
export interface ValidationErrorsProps {
    errors: string[];
    id?: string;
    dataAttr?: string;
}
export declare const ValidationErrors: ({ errors, id, dataAttr, }: ValidationErrorsProps) => JSX.Element | null;
