import { FetchDevicesOutput } from '../types';
/**
 * Fetches devices that have been remembered using {@link rememberDevice}
 * for the currently authenticated user.
 *
 * @returns FetchDevicesOutput
 * @throws {@link ListDevicesException}
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare function fetchDevices(): Promise<FetchDevicesOutput>;
