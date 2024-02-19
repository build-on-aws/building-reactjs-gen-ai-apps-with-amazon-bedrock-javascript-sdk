import { AmplifyClassV6 } from '@aws-amplify/core';
import { HttpRequest, Headers } from '@aws-amplify/core/internals/aws-client-utils';
import { DocumentType } from '@aws-amplify/core/internals/utils';
import { RestApiResponse } from '../../types';
type HandlerOptions = Omit<HttpRequest, 'body' | 'headers'> & {
    body?: DocumentType | FormData;
    headers?: Headers;
    withCredentials?: boolean;
};
type SigningServiceInfo = {
    service?: string;
    region?: string;
};
/**
 * Make REST API call with best-effort IAM auth.
 * @param amplify Amplify instance to to resolve credentials and tokens. Should use different instance in client-side
 *   and SSR
 * @param options Options accepted from public API options when calling the handlers.
 * @param signingServiceInfo Internal-only options enable IAM auth as well as to to overwrite the IAM signing service
 *   and region. If specified, and NONE of API Key header or Auth header is present, IAM auth will be used.
 *
 * @internal
 */
export declare const transferHandler: (amplify: AmplifyClassV6, options: HandlerOptions & {
    abortSignal: AbortSignal;
}, signingServiceInfo?: SigningServiceInfo) => Promise<RestApiResponse>;
export {};
