import { AdditionalDetails, SetCustomUserAgentInput } from './types';
/**
 * Sets custom user agent state which will be appended to applicable requests. Returns a function that can be used to
 * clean up any custom state set with this API.
 *
 * @note
 * This API operates globally. Calling this API multiple times will result in the most recently set values for a
 * particular API being used.
 *
 * @note
 * This utility IS NOT compatible with SSR.
 *
 * @param input - SetCustomUserAgentInput that defines custom state to apply to the specified APIs.
 */
export declare const setCustomUserAgent: (input: SetCustomUserAgentInput) => (() => void);
export declare const getCustomUserAgent: (category: string, api: string) => AdditionalDetails | undefined;
