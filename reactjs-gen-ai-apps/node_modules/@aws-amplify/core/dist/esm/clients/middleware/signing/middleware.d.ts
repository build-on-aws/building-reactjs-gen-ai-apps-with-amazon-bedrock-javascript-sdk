import { Credentials, HttpRequest, HttpResponse, MiddlewareHandler } from '../../types';
/**
 * Configuration of the signing middleware
 */
export interface SigningOptions {
    credentials: Credentials | (() => Promise<Credentials>);
    region: string;
    service: string;
    /**
     * Whether to uri encode the path as part of canonical uri. It's used for S3 only where the pathname
     * is already uri encoded, and the signing process is not expected to uri encode it again.
     *
     * @default true
     */
    uriEscapePath?: boolean;
}
/**
 * Middleware that SigV4 signs request with AWS credentials, and correct system clock offset.
 * This middleware is expected to be placed after retry middleware.
 */
export declare const signingMiddleware: ({ credentials, region, service, uriEscapePath, }: SigningOptions) => (next: MiddlewareHandler<HttpRequest, HttpResponse>) => (request: HttpRequest) => Promise<HttpResponse>;
