import type { IPlayerRequest, PlayerEndpointOptions } from '../../types/index.js';
export declare const PATH = "/player";
/**
 * Builds a `/player` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: PlayerEndpointOptions): IPlayerRequest;
