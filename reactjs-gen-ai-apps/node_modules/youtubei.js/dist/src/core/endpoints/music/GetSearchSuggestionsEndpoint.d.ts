import type { IMusicGetSearchSuggestionsRequest, MusicGetSearchSuggestionsEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/music/get_search_suggestions";
/**
 * Builds a `/music/get_search_suggestions` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: MusicGetSearchSuggestionsEndpointOptions): IMusicGetSearchSuggestionsRequest;
