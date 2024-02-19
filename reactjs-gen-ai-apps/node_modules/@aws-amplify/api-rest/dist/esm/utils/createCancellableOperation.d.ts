import { HttpResponse } from '@aws-amplify/core/internals/aws-client-utils';
import { Operation } from '../types';
/**
 * Create a cancellable operation conforming to the internal POST API interface.
 * @internal
 */
export declare function createCancellableOperation(handler: () => Promise<HttpResponse>, abortController: AbortController): Promise<HttpResponse>;
/**
 * Create a cancellable operation conforming to the external REST API interface.
 * @internal
 */
export declare function createCancellableOperation(handler: (signal: AbortSignal) => Promise<HttpResponse>): Operation<HttpResponse>;
