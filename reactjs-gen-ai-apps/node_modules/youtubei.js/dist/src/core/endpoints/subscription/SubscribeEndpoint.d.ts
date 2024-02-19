import type { ISubscribeRequest, SubscribeEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/subscription/subscribe";
/**
 * Builds a `/subscription/subscribe` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: SubscribeEndpointOptions): ISubscribeRequest;
