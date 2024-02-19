import { Endpoint, HttpResponse } from '@aws-amplify/core/internals/aws-client-utils';
import { MetadataBearer } from '@aws-sdk/types';
import type { AbortMultipartUploadCommandInput } from './types';
export type AbortMultipartUploadInput = Pick<AbortMultipartUploadCommandInput, 'Bucket' | 'Key' | 'UploadId'>;
export type AbortMultipartUploadOutput = MetadataBearer;
export declare const abortMultipartUpload: (config: {
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
    credentials: import("@aws-sdk/types").AwsCredentialIdentity | (() => Promise<import("@aws-sdk/types").AwsCredentialIdentity>);
    region: string;
    customEndpoint?: string | undefined;
    forcePathStyle?: boolean | undefined;
}, input: AbortMultipartUploadInput) => Promise<MetadataBearer>;
