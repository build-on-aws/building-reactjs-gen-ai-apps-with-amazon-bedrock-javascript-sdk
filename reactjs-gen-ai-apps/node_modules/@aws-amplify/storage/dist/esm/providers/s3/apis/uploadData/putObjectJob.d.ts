import { UploadDataInput } from '../../types';
import { Item as S3Item } from '../../types/outputs';
/**
 * Get a function the returns a promise to call putObject API to S3.
 *
 * @internal
 */
export declare const putObjectJob: ({ options: uploadDataOptions, key, data }: UploadDataInput, abortSignal: AbortSignal, totalLength?: number) => () => Promise<S3Item>;
