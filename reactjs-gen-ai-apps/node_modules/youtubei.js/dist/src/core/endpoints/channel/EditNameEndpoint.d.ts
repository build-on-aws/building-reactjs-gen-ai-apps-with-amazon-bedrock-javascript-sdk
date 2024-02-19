import type { IChannelEditNameRequest, ChannelEditNameEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/channel/edit_name";
/**
 * Builds a `/channel/edit_name` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: ChannelEditNameEndpointOptions): IChannelEditNameRequest;
