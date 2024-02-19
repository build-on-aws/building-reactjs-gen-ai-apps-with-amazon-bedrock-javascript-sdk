import { PasswordSettings } from '.';
import { AuthFormData, AuthTouchData } from './form';
/**
 * Maps each input to its validation error, if any
 */
export type ValidationError = Record<string, string | string[]>;
/**
 * Return type of validator. This is `null` if there are no error, and `ValidationError` otherwise.
 */
export type ValidatorResult = void | null | ValidationError;
export type SignInResult = string;
/**
 * Validates the given formData. This can be synchronous or asynchronous.
 */
export type Validator = (formData: AuthFormData, touchData?: AuthTouchData, passwordSettings?: PasswordSettings) => ValidatorResult | Promise<ValidatorResult>;
