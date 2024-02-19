import { Endpoint, HttpResponse } from '@aws-amplify/core/internals/aws-client-utils';
import type { CopyObjectCommandInput, CopyObjectCommandOutput } from './types';
export type CopyObjectInput = Pick<CopyObjectCommandInput, 'Bucket' | 'CopySource' | 'Key' | 'MetadataDirective' | 'CacheControl' | 'ContentType' | 'ContentDisposition' | 'ContentLanguage' | 'Expires' | 'ACL' | 'Tagging' | 'Metadata'>;
export type CopyObjectOutput = CopyObjectCommandOutput;
export declare const copyObject: (config: {
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
}, input: CopyObjectInput) => Promise<CopyObjectCommandOutput>;
