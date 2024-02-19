export const PATH = '/like/removelike';
/**
 * Builds a `/like/removelike` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options) {
    return Object.assign({ target: {
            videoId: options.target.video_id
        } }, {
        client: options.client
    });
}
//# sourceMappingURL=RemoveLikeEndpoint.js.map