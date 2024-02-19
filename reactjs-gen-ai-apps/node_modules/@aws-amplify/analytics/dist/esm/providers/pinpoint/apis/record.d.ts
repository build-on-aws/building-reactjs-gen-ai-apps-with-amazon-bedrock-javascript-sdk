import { RecordInput } from '../types';
/**
 * Records an Analytic event to Pinpoint. Events will be buffered and periodically sent to Pinpoint.
 *
 * @param params The input object used to construct the request.
 *
 * @throws validation: {@link AnalyticsValidationErrorCode} - Thrown when the provided parameters or library
 *  configuration is incorrect.
 *
 * @example
 * ```ts
 * // Send an event to Pinpoint
 * record({ name: eventName })
 * ```
 *
 * @example
 * ```ts
 * // Send an event to Pinpoint with metrics & custom attributes
 * record({
 *     name: eventName,
 *     attributes: {
 *         'my-attribute': attributeValue
 *     },
 *     metrics: {
 *         'my-metric': metricValue
 *     }
 * })
 * ```
 */
export declare const record: (input: RecordInput) => void;
