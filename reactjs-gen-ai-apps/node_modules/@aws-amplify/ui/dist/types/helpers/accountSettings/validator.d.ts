import { ValidatorOptions, PasswordRequirement, ValidationMode, InputEventType } from '../../types';
export declare const getPasswordRequirement: () => PasswordRequirement | null;
export declare const getHasMinLength: (minLength: number) => ValidatorOptions;
export declare const hasLowerCase: ValidatorOptions;
export declare const hasUpperCase: ValidatorOptions;
export declare const hasNumber: ValidatorOptions;
export declare const hasSpecialChar: ValidatorOptions;
export declare const getMatchesConfirmPassword: (password: string) => ValidatorOptions;
export declare const getDefaultPasswordValidators: () => ValidatorOptions[];
export declare const getDefaultConfirmPasswordValidators: (password: string) => ValidatorOptions[];
export declare const shouldValidate: ({ validationMode, eventType, hasBlurred, }: {
    validationMode: ValidationMode;
    eventType: InputEventType;
    hasBlurred: boolean;
}) => boolean;
export declare const runFieldValidators: ({ value, validators, eventType, hasBlurred, }: {
    value: string;
    validators: ValidatorOptions[];
    eventType: InputEventType;
    hasBlurred: boolean;
}) => string[];
