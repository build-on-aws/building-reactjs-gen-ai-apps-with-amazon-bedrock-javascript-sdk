import { RemoveInput, RemoveOutput } from '../types';
/**
 * Remove a file from your S3 bucket.
 * @param input - The RemoveInput object.
 * @return Output containing the removed object key
 * @throws service: {@link S3Exception} - S3 service errors thrown while getting properties
 * @throws validation: {@link StorageValidationErrorCode } - Validation errors thrown
 */
export declare const remove: (input: RemoveInput) => Promise<RemoveOutput>;
