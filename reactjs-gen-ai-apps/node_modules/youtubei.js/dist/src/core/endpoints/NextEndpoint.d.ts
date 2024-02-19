import type { INextRequest, NextEndpointOptions } from '../../types/index.js';
export declare const PATH = "/next";
/**
 * Builds a `/next` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: NextEndpointOptions): INextRequest;
