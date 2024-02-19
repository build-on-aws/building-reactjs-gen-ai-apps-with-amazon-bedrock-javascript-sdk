/**
 * Initialize and set up in-app messaging category. This API needs to be called to enable other InAppMessaging APIs.
 *
 * @remarks
 * Make sure to call this early in your app at the root entry point after configuring Amplify.
 * @example
 * ```ts
 * Amplify.configure(config);
 * initializeInAppMessaging();
 * ```
 */
export declare function initializeInAppMessaging(): void;
