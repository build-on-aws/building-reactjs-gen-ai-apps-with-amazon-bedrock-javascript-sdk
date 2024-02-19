import { EventBufferConfig } from '../types/buffer';
import { AuthSession } from '../../../singleton/Auth/types';
export type PinpointFlushEventsInput = Partial<EventBufferConfig> & {
    appId: string;
    region: string;
    credentials: Required<AuthSession>['credentials'];
    identityId?: AuthSession['identityId'];
    userAgentValue?: string;
};
export declare const flushEvents: ({ appId, region, credentials, bufferSize, flushInterval, flushSize, resendLimit, identityId, userAgentValue, }: PinpointFlushEventsInput) => void;
