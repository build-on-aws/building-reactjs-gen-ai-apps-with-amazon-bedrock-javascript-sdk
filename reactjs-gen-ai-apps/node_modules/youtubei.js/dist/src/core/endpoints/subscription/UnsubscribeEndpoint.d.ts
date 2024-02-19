import type { IUnsubscribeRequest, UnsubscribeEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/subscription/unsubscribe";
/**
 * Builds a `/subscription/unsubscribe` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: UnsubscribeEndpointOptions): IUnsubscribeRequest;
