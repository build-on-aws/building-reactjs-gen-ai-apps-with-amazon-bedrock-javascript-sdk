import { Endpoint, HttpResponse } from '@aws-amplify/core/internals/aws-client-utils';
import type { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from './types';
export type ListObjectsV2Input = ListObjectsV2CommandInput;
export type ListObjectsV2Output = ListObjectsV2CommandOutput;
export declare const listObjectsV2: (config: {
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
}, input: ListObjectsV2CommandInput) => Promise<ListObjectsV2CommandOutput>;
