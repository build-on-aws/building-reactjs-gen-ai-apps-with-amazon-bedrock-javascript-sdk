import { TransferProgressEvent } from '../../../../../types';
type ConcurrentUploadsProgressTrackerOptions = {
    size?: number;
    onProgress?: (event: TransferProgressEvent) => void;
};
/**
 * Track the progress from multiple concurrent uploads, and invoke the onProgress callback.
 *
 * @internal
 */
export declare const getConcurrentUploadsProgressTracker: ({ size, onProgress, }: ConcurrentUploadsProgressTrackerOptions) => {
    getOnProgressListener: () => (event: TransferProgressEvent) => void;
};
export {};
