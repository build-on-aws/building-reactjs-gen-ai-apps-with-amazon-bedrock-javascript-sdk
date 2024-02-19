import { HttpRequest } from '../../../../../types';
/**
 * Returns signed headers.
 *
 * @param headers `headers` from the request.
 * @returns List of headers included in canonical headers, separated by semicolons (;). This indicates which headers
 * are part of the signing process. Header names must use lowercase characters and must appear in alphabetical order.
 *
 * @internal
 */
export declare const getSignedHeaders: (headers: HttpRequest['headers']) => string;
