import { AuthFormData, AuthTouchData, PasswordSettings, Validator } from '../types';
export declare const runValidators: (formData: AuthFormData, touchData: AuthTouchData, passwordSettings: PasswordSettings, validators: Validator[]) => Promise<void>;
