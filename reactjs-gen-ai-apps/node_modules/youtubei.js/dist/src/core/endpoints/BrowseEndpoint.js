export const PATH = '/browse';
/**
 * Builds a `/browse` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts) {
    return Object.assign({
        browseId: opts.browse_id,
        params: opts.params,
        continuation: opts.continuation,
        client: opts.client
    });
}
//# sourceMappingURL=BrowseEndpoint.js.map