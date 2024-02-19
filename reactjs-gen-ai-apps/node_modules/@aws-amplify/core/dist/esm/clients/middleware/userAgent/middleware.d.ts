import { HttpRequest, HttpResponse } from '../../types/http';
import { Middleware } from '../../types/core';
export interface UserAgentOptions {
    userAgentHeader?: string;
    userAgentValue?: string;
}
/**
 * Middleware injects user agent string to specified header(default to 'x-amz-user-agent'),
 * if the header is not set already.
 *
 * TODO: incorporate new user agent design
 */
export declare const userAgentMiddleware: Middleware<HttpRequest, HttpResponse, UserAgentOptions>;
