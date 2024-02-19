/**
 * This file contains helpers that generate default form fields, given the
 * current Authenticator / Zero Config configuration.
 */
import { AuthMachineState } from '../../../machines/authenticator/types';
import { FormFields, FormFieldComponents, FormFieldsArray } from '../../../types';
export declare const getDefaultFormFields: (route: FormFieldComponents, state: AuthMachineState) => FormFields;
export declare const getCustomFormFields: (route: FormFieldComponents, state: AuthMachineState) => FormFields;
export declare const getFormFields: (route: FormFieldComponents, state: AuthMachineState) => FormFields;
export declare const removeOrderKeys: (formFields: FormFieldsArray) => FormFieldsArray;
/** Calls `getFormFields` above, then sorts it into an indexed array */
export declare const getSortedFormFields: (route: FormFieldComponents, state: AuthMachineState) => FormFieldsArray;
