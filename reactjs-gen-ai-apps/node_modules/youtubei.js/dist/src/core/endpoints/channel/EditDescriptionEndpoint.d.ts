import type { IChannelEditDescriptionRequest, ChannelEditDescriptionEndpointOptions } from '../../../types/Endpoints.js';
export declare const PATH = "/channel/edit_description";
/**
 * Builds a `/channel/edit_description` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: ChannelEditDescriptionEndpointOptions): IChannelEditDescriptionRequest;
