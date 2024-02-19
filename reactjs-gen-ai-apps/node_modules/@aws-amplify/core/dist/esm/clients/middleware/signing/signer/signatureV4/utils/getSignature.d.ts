import { HttpRequest } from '../../../../../types';
import { SigningValues } from '../types/signer';
/**
 * Calculates and returns an AWS API Signature.
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/create-signed-request.html
 *
 * @param request `HttpRequest` to be signed.
 * @param signRequestOptions `SignRequestOptions` object containing values used to construct the signature.
 * @returns AWS API Signature to sign a request or url with.
 *
 * @internal
 */
export declare const getSignature: (request: HttpRequest, { credentialScope, longDate, secretAccessKey, shortDate, signingRegion, signingService, uriEscapePath, }: SigningValues) => string;
