import type { IEditPlaylistRequest, EditPlaylistEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/browse/edit_playlist";
/**
 * Builds a `/browse/edit_playlist` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: EditPlaylistEndpointOptions): IEditPlaylistRequest;
