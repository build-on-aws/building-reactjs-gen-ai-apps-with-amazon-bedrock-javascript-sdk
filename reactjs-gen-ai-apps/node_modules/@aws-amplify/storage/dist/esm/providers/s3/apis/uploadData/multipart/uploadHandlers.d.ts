import { UploadDataInput } from '../../../types';
import { Item as S3Item } from '../../../types/outputs';
/**
 * Create closure hiding the multipart upload implementation details and expose the upload job and control functions(
 * onPause, onResume, onCancel).
 *
 * @internal
 */
export declare const getMultipartUploadHandlers: ({ options: uploadDataOptions, key, data }: UploadDataInput, size?: number) => {
    multipartUploadJob: () => Promise<S3Item>;
    onPause: () => void;
    onResume: () => void;
    onCancel: (message?: string) => void;
};
