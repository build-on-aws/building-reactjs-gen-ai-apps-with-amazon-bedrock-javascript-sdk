import { Presignable, PresignUrlOptions } from './types';
/**
 * Given a `Presignable` object, returns a Signature Version 4 presigned `URL` object.
 *
 * @param presignable `Presignable` object containing at least a url to be presigned with authentication query params.
 * @param presignUrlOptions `PresignUrlOptions` object containing values used to construct the signature.
 * @returns A `URL` with authentication query params which can grant temporary access to AWS resources.
 */
export declare const presignUrl: ({ body, method, url }: Presignable, { expiration, ...options }: PresignUrlOptions) => URL;
