import { SetBadgeCount } from '../types';
/**
 * Sets the current badge count (the number on the top right corner of your app's icon). Setting the badge count
 * to 0 (zero) will remove the badge from your app's icon. This function is safe to call (but will be ignored) even
 * when your React Native app is running on platforms where badges are not supported.
 *
 * @throws platform: {@link PlatformNotSupportedError} - Thrown if called against an unsupported platform. Currently,
 * only React Native is supported by this API.
 * @example
 * ```ts
 * setBadgeCount(42);
 * ```
 */
export declare const setBadgeCount: SetBadgeCount;
