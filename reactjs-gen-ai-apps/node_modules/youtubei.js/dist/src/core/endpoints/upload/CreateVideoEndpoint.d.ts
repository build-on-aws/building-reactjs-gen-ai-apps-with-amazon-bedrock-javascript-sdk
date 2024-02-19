import type { ICreateVideoRequest, CreateVideoEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/upload/createvideo";
/**
 * Builds a `/upload/createvideo` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: CreateVideoEndpointOptions): ICreateVideoRequest;
