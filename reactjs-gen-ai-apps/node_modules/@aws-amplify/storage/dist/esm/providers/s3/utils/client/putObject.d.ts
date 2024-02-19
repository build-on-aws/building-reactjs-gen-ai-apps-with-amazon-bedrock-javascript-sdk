import { Endpoint, HttpResponse } from '@aws-amplify/core/internals/aws-client-utils';
import type { PutObjectCommandInput, PutObjectCommandOutput } from './types';
export type PutObjectInput = Pick<PutObjectCommandInput, 'Bucket' | 'Key' | 'Body' | 'ACL' | 'CacheControl' | 'ContentDisposition' | 'ContentEncoding' | 'ContentType' | 'ContentMD5' | 'Expires' | 'Metadata' | 'Tagging'>;
export type PutObjectOutput = Pick<PutObjectCommandOutput, '$metadata' | 'ETag' | 'VersionId'>;
export declare const putObject: (config: {
    responseType?: "blob" | "text" | undefined;
    service?: string | undefined;
    endpointResolver?: (((options: import("@aws-amplify/core/internals/aws-client-utils").EndpointResolverOptions, input?: any) => Endpoint) & ((options: import("./base").S3EndpointResolverOptions, apiInput?: {
        Bucket?: string | undefined;
    } | undefined) => {
        url: URL;
    })) | undefined;
    retryDecider?: (((response?: HttpResponse | undefined, error?: unknown) => Promise<boolean>) & ((response?: HttpResponse | undefined, error?: unknown) => Promise<boolean>)) | undefined;
    computeDelay?: ((attempt: number) => number) | undefined;
    userAgentValue?: string | undefined;
    useAccelerateEndpoint?: boolean | undefined;
    uriEscapePath?: boolean | undefined;
} & {
    onDownloadProgress?: ((event: import("../../../..").TransferProgressEvent) => void) | undefined;
    onUploadProgress?: ((event: import("../../../..").TransferProgressEvent) => void) | undefined;
    abortSignal?: AbortSignal | undefined;
    userAgentHeader?: string | undefined;
    maxAttempts?: number | undefined;
    credentials: import("@aws-amplify/core/internals/aws-client-utils").Credentials | (() => Promise<import("@aws-amplify/core/internals/aws-client-utils").Credentials>);
    region: string;
    customEndpoint?: string | undefined;
    forcePathStyle?: boolean | undefined;
}, input: PutObjectInput) => Promise<PutObjectOutput>;
