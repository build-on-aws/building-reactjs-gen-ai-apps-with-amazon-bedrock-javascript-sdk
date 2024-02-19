import type { ICreatePlaylistRequest, CreatePlaylistEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/playlist/create";
/**
 * Builds a `/playlist/create` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: CreatePlaylistEndpointOptions): ICreatePlaylistRequest;
