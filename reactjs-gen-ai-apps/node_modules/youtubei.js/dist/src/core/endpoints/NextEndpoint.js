export const PATH = '/next';
/**
 * Builds a `/next` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts) {
    return Object.assign({
        videoId: opts.video_id,
        playlistId: opts.playlist_id,
        params: opts.params,
        playlistIndex: opts.playlist_index,
        client: opts.client,
        continuation: opts.continuation
    });
}
//# sourceMappingURL=NextEndpoint.js.map