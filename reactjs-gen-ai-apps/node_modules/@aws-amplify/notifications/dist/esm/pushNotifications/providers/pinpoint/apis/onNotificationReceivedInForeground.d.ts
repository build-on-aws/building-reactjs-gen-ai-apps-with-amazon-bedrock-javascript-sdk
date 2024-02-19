import { OnNotificationReceivedInForeground } from '../types';
/**
 * Registers a listener that will be triggered when a notification is received while app is in a foreground state.
 *
 * @param {OnNotificationReceivedInForegroundInput} input - A callback handler to be invoked with the received
 * {@link PushNotificationMessage}.
 * @returns {OnNotificationReceivedInForegroundOutput} - An object with a remove function to remove the listener.
 * @example
 * ```ts
 * // Register a listener
 * onNotificationReceivedInForeground(message => {
 *   doSomething(message);
 * });
 * ```
 * @example
 * ```ts
 * // Register multiple listeners
 * onNotificationReceivedInForeground(message => {
 *   doSomething(message);
 * });
 *
 * onNotificationReceivedInForeground(message => {
 *   doSomethingElse(message);
 * });
 * ```
 */
export declare const onNotificationReceivedInForeground: OnNotificationReceivedInForeground;
