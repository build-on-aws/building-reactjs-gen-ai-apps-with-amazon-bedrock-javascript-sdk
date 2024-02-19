import type { ICreateCommentRequest, CreateCommentEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/comment/create_comment";
/**
 * Builds a `/comment/create_comment` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: CreateCommentEndpointOptions): ICreateCommentRequest;
