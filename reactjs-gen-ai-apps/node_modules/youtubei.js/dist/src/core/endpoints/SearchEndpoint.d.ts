import type { ISearchRequest, SearchEndpointOptions } from '../../types/index.js';
export declare const PATH = "/search";
/**
 * Builds a `/search` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: SearchEndpointOptions): ISearchRequest;
