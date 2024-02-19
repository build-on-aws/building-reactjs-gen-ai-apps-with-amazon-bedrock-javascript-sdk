/**
 * Clear locally cached messages.
 *
 * @throws validation: {@link InAppMessagingValidationErrorCode} - Thrown if In App messaging hasn't been initialized.
 * @returns A promise that will resolve when the operation is complete.
 * @example
 * ```ts
 * // Clear locally cached messages.
 * await clearMessages();
 *
 * ```
 */
export declare function clearMessages(): Promise<void>;
