import type { IDeletePlaylistRequest, DeletePlaylistEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/playlist/delete";
/**
 * Builds a `/playlist/delete` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: DeletePlaylistEndpointOptions): IDeletePlaylistRequest;
