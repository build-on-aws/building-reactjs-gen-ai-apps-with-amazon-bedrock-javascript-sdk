import type { IDislikeRequest, DislikeEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/like/dislike";
/**
 * Builds a `/like/dislike` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: DislikeEndpointOptions): IDislikeRequest;
