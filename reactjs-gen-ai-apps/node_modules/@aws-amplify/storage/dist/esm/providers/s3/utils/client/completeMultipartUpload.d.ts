import { Endpoint, HttpResponse } from '@aws-amplify/core/internals/aws-client-utils';
import type { CompleteMultipartUploadCommandInput, CompleteMultipartUploadCommandOutput } from './types';
export type CompleteMultipartUploadInput = Pick<CompleteMultipartUploadCommandInput, 'Bucket' | 'Key' | 'UploadId' | 'MultipartUpload'>;
export type CompleteMultipartUploadOutput = Pick<CompleteMultipartUploadCommandOutput, '$metadata' | 'Key' | 'ETag' | 'Location'>;
export declare const completeMultipartUpload: (config: {
    responseType?: "blob" | "text" | undefined;
    retryDecider?: (((response?: HttpResponse | undefined, error?: unknown) => Promise<boolean>) & ((response?: HttpResponse, error?: unknown) => Promise<boolean>)) | undefined;
    service?: string | undefined;
    endpointResolver?: (((options: import("@aws-amplify/core/internals/aws-client-utils").EndpointResolverOptions, input?: any) => Endpoint) & ((options: import("./base").S3EndpointResolverOptions, apiInput?: {
        Bucket?: string | undefined;
    } | undefined) => {
        url: URL;
    })) | undefined;
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
}, input: CompleteMultipartUploadInput) => Promise<CompleteMultipartUploadOutput>;
