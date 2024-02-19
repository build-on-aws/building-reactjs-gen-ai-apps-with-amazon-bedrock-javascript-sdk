/**
 * Flushes all buffered Pinpoint events to the service.
 *
 * @note
 * This API will make a best-effort attempt to flush events from the buffer. Events recorded immediately after invoking
 * this API may not be included in the flush.
 */
export declare const flushEvents: () => void;
