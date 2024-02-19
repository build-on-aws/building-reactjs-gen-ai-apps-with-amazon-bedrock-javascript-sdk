import { RecordInput } from '../types';
/**
 * Record one analytic event and send it to Personalize. Events will be buffered and periodically sent to Amazon
 * Personalize.
 *
 * For more examples, you can refer to {@link https://docs.amplify.aws/javascript/build-a-backend/more-features/analytics/personalize-recommendations/#working-with-the-api the API usage guidance.}
 *
 * @param input The input object used to construct the request.
 *
 * @throws validation: {@link AnalyticsValidationErrorCode} - Thrown when the provided parameters or library
 *  configuration is incorrect.
 *
 * @example
 * ```ts
 * // Record an `Identify` event to Personalize.
 * record({
 *   eventType: "Identify",
 *   properties: {
 *     userId: "<USER_ID>"
 *   }
 * });
 * ```
 * @param input - The event to record.
 *
 * @returns void
 */
export declare const record: ({ userId, eventId, eventType, properties, }: RecordInput) => void;
