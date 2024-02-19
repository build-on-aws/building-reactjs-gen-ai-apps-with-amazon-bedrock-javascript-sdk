import { RecordInput } from '../types';
/**
 * Record one analytic event and send it to Kinesis. Events will be buffered and periodically sent to
 * Kinesis.
 *
 * @param params The input object used to construct the request.
 *
 * @throws validation: {@link AnalyticsValidationErrorCode} - Thrown when the provided parameters or library
 *  configuration is incorrect.
 *
 * @example
 * ```ts
 * record({
 *     streamName: 'myKinesisStream',
 *     partitionKey: 'myPartitionKey',
 *     data: { } // The data blob to put into the record
 * });
 * ```
 * @param input - The event to record.
 *
 * @returns void
 */
export declare const record: ({ streamName, partitionKey, data, }: RecordInput) => void;
