import { PinpointRecordInput } from '../types';
/**
 * @internal
 */
export declare const record: ({ appId, category, channelType, credentials, event, identityId, region, userAgentValue, bufferSize, flushInterval, flushSize, resendLimit, }: PinpointRecordInput) => Promise<void>;
