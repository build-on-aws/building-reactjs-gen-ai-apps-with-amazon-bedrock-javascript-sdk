import { RecordInput } from '../types';
/**
 * Record one analytic event and send it to Kinesis Data Firehose. Events will be buffered and periodically sent to
 * Kinesis Data Firehose.
 *
 * @param params The input object used to construct the request.
 *
 * @throws validation: {@link AnalyticsValidationErrorCode} - Thrown when the provided parameters or library
 *  configuration is incorrect.
 *
 * @example
 * ```ts
 * record({
 *     streamName: 'myFirehoseStream',
 *     data: { } // The data blob to put into the record
 * });
 * ```
 */
export declare const record: ({ streamName, data }: RecordInput) => void;
