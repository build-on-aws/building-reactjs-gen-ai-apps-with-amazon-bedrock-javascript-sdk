import { CommonFields, FormFields, SignUpAttribute } from '../../types';
export declare const getFormDataFromEvent: (event: Event) => {
    [k: string]: FormDataEntryValue;
};
export declare const setFormOrder: (formOverrides: FormFields, fieldNames: Array<SignUpAttribute | CommonFields>) => Array<string | number>;
export declare const isAuthFieldWithDefaults: (field: string) => field is "birthdate" | "email" | "family_name" | "given_name" | "middle_name" | "name" | "nickname" | "phone_number" | "preferred_username" | "profile" | "website" | "username" | "password" | "confirm_password" | "confirmation_code";
export declare const getErrors: (errors: string | string[]) => string[];
