import type { IRemoveLikeRequest, RemoveLikeEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/like/removelike";
/**
 * Builds a `/like/removelike` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: RemoveLikeEndpointOptions): IRemoveLikeRequest;
