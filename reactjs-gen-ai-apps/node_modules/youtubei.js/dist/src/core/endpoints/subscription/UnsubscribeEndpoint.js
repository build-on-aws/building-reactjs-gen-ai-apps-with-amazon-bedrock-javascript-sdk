export const PATH = '/subscription/unsubscribe';
/**
 * Builds a `/subscription/unsubscribe` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options) {
    return Object.assign({ channelIds: options.channel_ids }, {
        client: options.client,
        params: options.params
    });
}
//# sourceMappingURL=UnsubscribeEndpoint.js.map