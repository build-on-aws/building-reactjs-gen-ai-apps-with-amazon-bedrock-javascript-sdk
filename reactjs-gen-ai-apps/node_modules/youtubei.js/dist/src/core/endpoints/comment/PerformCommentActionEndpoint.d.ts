import type { IPerformCommentActionRequest, PerformCommentActionEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/comment/perform_comment_action";
/**
 * Builds a `/comment/perform_comment_action` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: PerformCommentActionEndpointOptions): IPerformCommentActionRequest;
