import { UploadDataInput, UploadDataOutput } from '../../types';
/**
 * Upload data to specified S3 object. By default, it uses single PUT operation to upload if the data is less than 5MB.
 * Otherwise, it uses multipart upload to upload the data. If the data length is unknown, it uses multipart upload.
 *
 * Limitations:
 * * Maximum object size is 5TB.
 * * Maximum object size if the size cannot be determined before upload is 50GB.
 *
 * @param input - The UploadDataInput object.
 * @returns A cancelable and resumable task exposing result promise from `result`
 * 	property.
 * @throws service: {@link S3Exception} - thrown when checking for existence of the object
 * @throws validation: {@link StorageValidationErrorCode } - Validation errors.
 *
 * @example
 * ```ts
 * // Upload a file to s3 bucket
 * await uploadData({ key, data: file, options: {
 *   onProgress, // Optional progress callback.
 * } }).result;
 * ```
 * @example
 * ```ts
 * // Cancel a task
 * const uploadTask = uploadData({ key, data: file });
 * //...
 * uploadTask.cancel();
 * try {
 *   await uploadTask.result;
 * } catch (error) {
 *   if(isCancelError(error)) {
 *     // Handle error thrown by task cancelation.
 *   }
 * }
 *```
 *
 * @example
 * ```ts
 * // Pause and resume a task
 * const uploadTask = uploadData({ key, data: file });
 * //...
 * uploadTask.pause();
 * //...
 * uploadTask.resume();
 * //...
 * await uploadTask.result;
 * ```
 */
export declare const uploadData: (input: UploadDataInput) => UploadDataOutput;
