import { StorageAccessLevel } from '@aws-amplify/core';
import { ResolvedS3Config } from '../../../types/options';
import { Part } from '../../../utils/client';
type FindCachedUploadPartsOptions = {
    cacheKey: string;
    s3Config: ResolvedS3Config;
    bucket: string;
    finalKey: string;
};
/**
 * Find the cached multipart upload id and get the parts that have been uploaded
 * with ListParts API. If the cached upload is expired(1 hour), return null.
 */
export declare const findCachedUploadParts: ({ cacheKey, s3Config, bucket, finalKey, }: FindCachedUploadPartsOptions) => Promise<{
    parts: Part[];
    uploadId: string;
} | null>;
type FileMetadata = {
    bucket: string;
    fileName: string;
    key: string;
    uploadId: string;
    lastTouched: number;
};
type UploadsCacheKeyOptions = {
    size: number;
    contentType?: string;
    bucket: string;
    accessLevel: StorageAccessLevel;
    key: string;
    file?: File;
};
/**
 * Get the cache key of a multipart upload. Data source cached by different: size, content type, bucket, access level,
 * key. If the data source is a File instance, the upload is additionally indexed by file name and last modified time.
 * So the library always created a new multipart upload if the file is modified.
 */
export declare const getUploadsCacheKey: ({ file, size, contentType, bucket, accessLevel, key, }: UploadsCacheKeyOptions) => string;
export declare const cacheMultipartUpload: (cacheKey: string, fileMetadata: Omit<FileMetadata, 'lastTouched'>) => Promise<void>;
export declare const removeCachedUpload: (cacheKey: string) => Promise<void>;
export {};
