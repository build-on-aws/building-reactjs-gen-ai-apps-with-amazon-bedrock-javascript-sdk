/// <reference types="react" />
import { FormFieldOptions } from '@aws-amplify/ui';
export interface FormFieldProps extends Omit<FormFieldOptions, 'label'> {
    label: string;
    name: string;
}
export declare function FormField({ autocomplete: autoComplete, dialCode, name, type, ...props }: FormFieldProps): JSX.Element;
