export const PATH = '/navigation/resolve_url';
/**
 * Builds a `/resolve_url` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts) {
    return Object.assign({
        url: opts.url
    });
}
//# sourceMappingURL=ResolveURLEndpoint.js.map