/**
 * Fetch and persist messages from Pinpoint campaigns.
 * Calling this API is necessary to trigger InApp messages on the device.
 *
 * @throws service exceptions - Thrown when the underlying Pinpoint service returns an error.
 * @throws validation: {@link InAppMessagingValidationErrorCode} - Thrown when the provided parameters or library
 * configuration is incorrect, or if In App messaging hasn't been initialized.
 * @returns A promise that will resolve when the operation is complete.
 * @example
 * ```ts
 * // Sync InApp messages with Pinpoint and device.
 * await syncMessages();
 *
 * ```
 */
export declare function syncMessages(): Promise<void>;
