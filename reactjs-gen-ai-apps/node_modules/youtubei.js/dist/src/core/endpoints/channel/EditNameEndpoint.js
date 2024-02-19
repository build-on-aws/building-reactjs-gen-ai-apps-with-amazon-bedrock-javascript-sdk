export const PATH = '/channel/edit_name';
/**
 * Builds a `/channel/edit_name` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options) {
    return {
        givenName: options.given_name,
        client: 'ANDROID'
    };
}
//# sourceMappingURL=EditNameEndpoint.js.map