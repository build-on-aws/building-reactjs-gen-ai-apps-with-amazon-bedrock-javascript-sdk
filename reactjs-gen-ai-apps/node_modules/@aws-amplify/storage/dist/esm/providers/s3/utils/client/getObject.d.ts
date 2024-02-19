import { Endpoint, UserAgentOptions, PresignUrlOptions, HttpResponse } from '@aws-amplify/core/internals/aws-client-utils';
import { S3EndpointResolverOptions } from './base';
import type { GetObjectCommandInput, GetObjectCommandOutput } from './types';
export type GetObjectInput = Pick<GetObjectCommandInput, 'Bucket' | 'Key' | 'Range'>;
export type GetObjectOutput = GetObjectCommandOutput;
export declare const getObject: (config: {
    responseType?: "blob" | "text" | undefined;
    service?: string | undefined;
    endpointResolver?: (((options: import("@aws-amplify/core/internals/aws-client-utils").EndpointResolverOptions, input?: any) => Endpoint) & ((options: S3EndpointResolverOptions, apiInput?: {
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
}, input: GetObjectInput) => Promise<GetObjectCommandOutput>;
type S3GetObjectPresignedUrlConfig = Omit<UserAgentOptions & PresignUrlOptions & S3EndpointResolverOptions, 'signingService' | 'signingRegion'> & {
    signingService?: string;
    signingRegion?: string;
};
/**
 * Get a presigned URL for the `getObject` API.
 *
 * @internal
 */
export declare const getPresignedGetObjectUrl: (config: S3GetObjectPresignedUrlConfig, input: GetObjectInput) => Promise<URL>;
export {};
