import { FetchMFAPreferenceOutput } from '../types';
/**
 * Fetches the preferred MFA setting and enabled MFA settings for the user.
 *
 * @returns FetchMFAPreferenceOutput
 * @throws  -{@link GetUserException} : error thrown when the service fails to fetch MFA preference
 * and settings.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare function fetchMFAPreference(): Promise<FetchMFAPreferenceOutput>;
