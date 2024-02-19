import { StorageAccessLevel } from '@aws-amplify/core';
import { ResolvedS3Config } from '../../../types/options';
import { StorageUploadDataPayload } from '../../../../../types';
import { Part } from '../../../utils/client';
type LoadOrCreateMultipartUploadOptions = {
    s3Config: ResolvedS3Config;
    data: StorageUploadDataPayload;
    bucket: string;
    accessLevel: StorageAccessLevel;
    keyPrefix: string;
    key: string;
    contentType?: string;
    contentDisposition?: string;
    contentEncoding?: string;
    metadata?: Record<string, string>;
    size?: number;
    abortSignal?: AbortSignal;
};
type LoadOrCreateMultipartUploadResult = {
    uploadId: string;
    cachedParts: Part[];
};
/**
 * Load the in-progress multipart upload from local storage or async storage(RN) if it exists, or create a new multipart
 * upload.
 *
 * @internal
 */
export declare const loadOrCreateMultipartUpload: ({ s3Config, data, size, contentType, bucket, accessLevel, keyPrefix, key, contentDisposition, contentEncoding, metadata, abortSignal, }: LoadOrCreateMultipartUploadOptions) => Promise<LoadOrCreateMultipartUploadResult>;
export {};
