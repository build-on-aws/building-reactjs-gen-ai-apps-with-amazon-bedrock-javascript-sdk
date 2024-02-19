export const PATH = '/search';
/**
 * Builds a `/search` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts) {
    return Object.assign({
        query: opts.query,
        params: opts.params,
        continuation: opts.continuation,
        client: opts.client
    });
}
//# sourceMappingURL=SearchEndpoint.js.map