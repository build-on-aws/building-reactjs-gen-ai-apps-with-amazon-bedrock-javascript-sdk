import { HttpRequest } from '../../../../types';
import { SignRequestOptions } from './types/signer';
/**
 * Given a `HttpRequest`, returns a Signature Version 4 signed `HttpRequest`.
 *
 * @param request `HttpRequest` to be signed.
 * @param signRequestOptions `SignRequestOptions` object containing values used to construct the signature.
 * @returns A `HttpRequest` with authentication headers which can grant temporary access to AWS resources.
 */
export declare const signRequest: (request: HttpRequest, options: SignRequestOptions) => HttpRequest;
