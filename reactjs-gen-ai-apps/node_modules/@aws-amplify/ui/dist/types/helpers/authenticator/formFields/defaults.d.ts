import { FormFields, FormFieldOptions, FormFieldComponents } from '../../../types';
import { AuthMachineState } from '../../../machines/authenticator/types';
export declare const DEFAULT_COUNTRY_CODE = "+1";
export declare const getAliasDefaultFormField: (state: AuthMachineState) => FormFieldOptions;
/** Collect all the defaultFormFields getters */
export declare const defaultFormFieldsGetters: Record<FormFieldComponents, (state: AuthMachineState) => FormFields>;
