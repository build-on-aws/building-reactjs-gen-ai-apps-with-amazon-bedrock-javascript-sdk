import type { IResolveURLRequest, ResolveURLEndpointOptions } from '../../types/index.js';
export declare const PATH = "/navigation/resolve_url";
/**
 * Builds a `/resolve_url` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: ResolveURLEndpointOptions): IResolveURLRequest;
