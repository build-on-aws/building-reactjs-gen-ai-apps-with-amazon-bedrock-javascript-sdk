import { AmplifyClassV6 } from '@aws-amplify/core';
import { InternalPostInput, RestApiResponse } from '../../types';
/**
 * @internal
 */
export declare const post: (amplify: AmplifyClassV6, { url, options, abortController }: InternalPostInput) => Promise<RestApiResponse>;
/**
 * Cancels a request given the promise returned by `post`.
 * If the request is already completed, this function does nothing.
 * It MUST be used after `updateRequestToBeCancellable` is called.
 */
export declare const cancel: (promise: Promise<RestApiResponse>, message?: string) => boolean;
/**
 * MUST be used to make a promise including internal `post` API call cancellable.
 */
export declare const updateRequestToBeCancellable: (promise: Promise<any>, controller: AbortController) => void;
