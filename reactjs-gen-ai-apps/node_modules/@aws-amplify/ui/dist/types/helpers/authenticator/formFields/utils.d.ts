import { FormFields, FormFieldsArray } from '../../../types';
import { AuthMachineState } from '../../../machines/authenticator/types';
export declare const getPrimaryAlias: (state: AuthMachineState) => "email" | "phone_number" | "username";
/** Applies translations to label and placeholder */
export declare const applyTranslation: (formFields: FormFields) => FormFields;
/** Sorts formFields according to their `order`.  */
export declare const sortFormFields: (formFields: FormFields) => FormFieldsArray;
