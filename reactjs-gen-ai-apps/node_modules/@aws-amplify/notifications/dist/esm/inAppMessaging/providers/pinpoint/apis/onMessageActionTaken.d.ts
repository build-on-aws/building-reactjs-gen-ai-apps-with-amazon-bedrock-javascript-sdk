import { OnMessageActionTakenInput } from '../types/inputs';
import { OnMessageActionTakenOutput } from '../types/outputs';
/**
 * Registers a callback that will be invoked on `messageActionTaken` events.
 *
 * @param {OnMessageActionTakenInput} input - The input object that holds the callback handler.
 * @throws validation: {@link InAppMessagingValidationErrorCode} - Thrown when the provided parameters or library
 * configuration is incorrect, or if In App messaging hasn't been initialized.
 * @returns {OnMessageActionTakenOutput} - An object that holds a remove method to stop listening to events.
 * @example
 * ```ts
 * onMessageActionTaken((message) => {
 *   // use the message
 *   console.log(message.id);
 * });
 * ```
 */
export declare function onMessageActionTaken(input: OnMessageActionTakenInput): OnMessageActionTakenOutput;
