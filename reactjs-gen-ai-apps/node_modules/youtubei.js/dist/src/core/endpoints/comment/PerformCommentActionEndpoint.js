export const PATH = '/comment/perform_comment_action';
/**
 * Builds a `/comment/perform_comment_action` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options) {
    return Object.assign({ actions: options.actions }, {
        client: options.client
    });
}
//# sourceMappingURL=PerformCommentActionEndpoint.js.map