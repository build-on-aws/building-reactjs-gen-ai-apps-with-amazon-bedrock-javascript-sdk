import { PinpointUpdateEndpointInput } from '../types';
/**
 * Resolves an endpoint id from cache or prepare via updateEndpoint if one does not already exist,
 * which will generate and cache an endpoint id between calls.
 *
 * @internal
 */
export declare const resolveEndpointId: ({ address, appId, category, channelType, credentials, identityId, region, userAgentValue, }: PinpointUpdateEndpointInput) => Promise<string>;
