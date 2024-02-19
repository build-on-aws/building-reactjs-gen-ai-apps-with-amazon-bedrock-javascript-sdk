import { PartToUpload } from './getDataChunker';
import { TransferProgressEvent } from '../../../../../types';
import { ResolvedS3Config } from '../../../types/options';
type UploadPartExecutorOptions = {
    dataChunkerGenerator: Generator<PartToUpload, void, undefined>;
    completedPartNumberSet: Set<number>;
    s3Config: ResolvedS3Config;
    abortSignal: AbortSignal;
    bucket: string;
    finalKey: string;
    uploadId: string;
    isObjectLockEnabled?: boolean;
    onPartUploadCompletion: (partNumber: number, eTag: string) => void;
    onProgress?: (event: TransferProgressEvent) => void;
};
export declare const uploadPartExecutor: ({ dataChunkerGenerator, completedPartNumberSet, s3Config, abortSignal, bucket, finalKey, uploadId, onPartUploadCompletion, onProgress, isObjectLockEnabled, }: UploadPartExecutorOptions) => Promise<void>;
export {};
