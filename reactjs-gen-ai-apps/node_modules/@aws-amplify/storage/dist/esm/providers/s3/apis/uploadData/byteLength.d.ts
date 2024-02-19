/**
 * Calculate the total size of the data to be uploaded. The total size is not required for multipart upload, as it's
 * only used in progress report.
 */
export declare const byteLength: (input?: any) => number | undefined;
