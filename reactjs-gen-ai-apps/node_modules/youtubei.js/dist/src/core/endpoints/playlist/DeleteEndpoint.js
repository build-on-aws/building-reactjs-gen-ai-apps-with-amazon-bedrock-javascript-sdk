export const PATH = '/playlist/delete';
/**
 * Builds a `/playlist/delete` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts) {
    return {
        playlistId: opts.playlist_id
    };
}
//# sourceMappingURL=DeleteEndpoint.js.map