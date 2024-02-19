export const PATH = '/music/get_search_suggestions';
/**
 * Builds a `/music/get_search_suggestions` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts) {
    return {
        input: opts.input,
        client: 'YTMUSIC'
    };
}
//# sourceMappingURL=GetSearchSuggestionsEndpoint.js.map