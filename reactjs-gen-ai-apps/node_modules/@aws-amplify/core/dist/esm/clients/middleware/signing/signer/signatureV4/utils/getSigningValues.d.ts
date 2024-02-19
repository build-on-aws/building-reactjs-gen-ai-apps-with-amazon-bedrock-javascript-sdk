import { SignRequestOptions } from '../types';
import { SigningValues } from '../types/signer';
/**
 * Extracts common values used for signing both requests and urls.
 *
 * @param options `SignRequestOptions` object containing values used to construct the signature.
 * @returns Common `SigningValues` used for signing.
 *
 * @internal
 */
export declare const getSigningValues: ({ credentials, signingDate, signingRegion, signingService, uriEscapePath, }: SignRequestOptions) => SigningValues;
