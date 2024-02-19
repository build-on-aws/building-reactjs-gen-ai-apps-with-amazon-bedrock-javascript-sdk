import type { ILikeRequest, LikeEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/like/like";
/**
 * Builds a `/like/like` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: LikeEndpointOptions): ILikeRequest;
