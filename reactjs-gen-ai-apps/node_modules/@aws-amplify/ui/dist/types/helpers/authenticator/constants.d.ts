/**
 * This file contains helpers related to forms and input attributes.
 */
import { DefaultFormFieldOptions } from '../../types';
import { AuthEventTypes, NavigableRoute } from '../../machines/authenticator/types';
export declare const defaultFormFieldOptions: DefaultFormFieldOptions;
/**
 * List of special characters that Cognito allows.
 *
 * Adapted from https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html
 */
export declare const ALLOWED_SPECIAL_CHARACTERS: string[];
/**
 * Email validation regex
 *
 * source: HTML5 spec https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
 */
export declare const emailRegex: RegExp;
/**
+ * map navigable route keys to auth event names
+ */
export declare const NAVIGABLE_ROUTE_EVENT: Record<NavigableRoute, AuthEventTypes>;
