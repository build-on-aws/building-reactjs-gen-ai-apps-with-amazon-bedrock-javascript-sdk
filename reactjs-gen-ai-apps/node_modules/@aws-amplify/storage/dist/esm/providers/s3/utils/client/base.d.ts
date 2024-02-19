import { EndpointResolverOptions } from '@aws-amplify/core/internals/aws-client-utils';
/**
 * The service name used to sign requests if the API requires authentication.
 */
export declare const SERVICE_NAME = "s3";
/**
 * Options for endpoint resolver.
 *
 * @internal
 */
export type S3EndpointResolverOptions = EndpointResolverOptions & {
    /**
     * Whether to use the S3 Transfer Acceleration endpoint.
     */
    useAccelerateEndpoint?: boolean;
    /**
     * Fully qualified custom endpoint for S3. If this is set, this endpoint will be used regardless of region or
     * useAccelerateEndpoint config.
     * The path of this endpoint
     */
    customEndpoint?: string;
    /**
     * Whether to force path style URLs for S3 objects (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of
     * https://<bucketName>.s3.amazonaws.com/<key>
     * @default false
     */
    forcePathStyle?: boolean;
};
/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 * @internal
 *
 * @see https://github.com/aws/aws-sdk-js-v3/blob/f2da6182298d4d6b02e84fb723492c07c27469a8/packages/middleware-bucket-endpoint/src/bucketHostnameUtils.ts#L39-L48
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 */
export declare const isDnsCompatibleBucketName: (bucketName: string) => boolean;
/**
 * @internal
 */
export declare const defaultConfig: {
    service: string;
    endpointResolver: (options: S3EndpointResolverOptions, apiInput?: {
        Bucket?: string;
    }) => {
        url: URL;
    };
    retryDecider: (response?: import("@aws-amplify/core/internals/aws-client-utils").HttpResponse | undefined, error?: unknown) => Promise<boolean>;
    computeDelay: (attempt: number) => number;
    userAgentValue: string;
    useAccelerateEndpoint: boolean;
    uriEscapePath: boolean;
};
