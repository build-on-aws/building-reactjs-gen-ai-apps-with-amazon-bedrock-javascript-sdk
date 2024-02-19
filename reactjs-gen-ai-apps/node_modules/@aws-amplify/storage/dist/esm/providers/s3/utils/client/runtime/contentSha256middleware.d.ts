import { HttpRequest, MiddlewareHandler, HttpResponse } from '@aws-amplify/core/internals/aws-client-utils';
/**
 * A middleware that adds the x-amz-content-sha256 header to the request if it is not already present.
 * It's required for S3 requests in browsers where the request body is sent in 1 chunk.
 * @see https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-header-based-auth.html
 *
 * @internal
 */
export declare const contentSha256Middleware: (options: {}) => (next: MiddlewareHandler<HttpRequest, HttpResponse>) => (request: HttpRequest) => Promise<HttpResponse>;
