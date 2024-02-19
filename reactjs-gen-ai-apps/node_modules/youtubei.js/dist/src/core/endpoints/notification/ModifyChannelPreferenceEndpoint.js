export const PATH = '/notification/modify_channel_preference';
/**
 * Builds a `/notification/modify_channel_preference` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options) {
    return Object.assign({ params: options.params }, {
        client: options.client
    });
}
//# sourceMappingURL=ModifyChannelPreferenceEndpoint.js.map