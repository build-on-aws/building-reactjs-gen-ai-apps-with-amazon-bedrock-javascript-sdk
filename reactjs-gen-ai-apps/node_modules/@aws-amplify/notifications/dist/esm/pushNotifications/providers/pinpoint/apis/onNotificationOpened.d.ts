import { OnNotificationOpened } from '../types';
/**
 * Registers a listener that will be triggered when a notification is opened by user.
 *
 * @param {OnNotificationOpenedInput} input - A callback handler to be invoked with the opened
 * {@link PushNotificationMessage}.
 * @returns {OnNotificationOpenedOutput} - An object with a remove function to remove the listener.
 * @example
 * ```ts
 * // Register a listener
 * onNotificationOpened(message => {
 *   doSomething(message);
 * });
 * ```
 * @example
 * ```ts
 * // Register multiple listeners
 * onNotificationOpened(message => {
 *   doSomething(message);
 * });
 *
 * onNotificationOpened(message => {
 *   doSomethingElse(message);
 * });
 * ```
 */
export declare const onNotificationOpened: OnNotificationOpened;
