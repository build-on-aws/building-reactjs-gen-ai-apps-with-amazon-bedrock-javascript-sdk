import { DownloadTask, UploadTask } from '../../../types/common';
type CreateCancellableTaskOptions<Result> = {
    job: () => Promise<Result>;
    onCancel: (message?: string) => void;
};
type CancellableTask<Result> = DownloadTask<Result>;
export declare const createDownloadTask: <Result>({ job, onCancel, }: CreateCancellableTaskOptions<Result>) => CancellableTask<Result>;
type CreateUploadTaskOptions<Result> = {
    job: () => Promise<Result>;
    onCancel: (message?: string) => void;
    onResume?: () => void;
    onPause?: () => void;
    isMultipartUpload?: boolean;
};
export declare const createUploadTask: <Result>({ job, onCancel, onResume, onPause, isMultipartUpload, }: CreateUploadTaskOptions<Result>) => UploadTask<Result>;
export {};
