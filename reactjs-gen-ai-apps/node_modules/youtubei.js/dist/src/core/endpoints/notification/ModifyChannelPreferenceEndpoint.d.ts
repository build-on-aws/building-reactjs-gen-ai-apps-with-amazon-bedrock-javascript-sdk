import type { IModifyChannelPreferenceRequest, ModifyChannelPreferenceEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/notification/modify_channel_preference";
/**
 * Builds a `/notification/modify_channel_preference` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: ModifyChannelPreferenceEndpointOptions): IModifyChannelPreferenceRequest;
