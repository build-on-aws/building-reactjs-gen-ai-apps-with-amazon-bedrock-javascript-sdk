import { EventBuffer } from '../../../utils';
import { PersonalizeBufferEvent, PersonalizeEvent } from '../types';
type MediaAutoTrackConfig = {
    trackingId: string;
    sessionId: string;
    userId?: string;
    event: PersonalizeEvent;
};
export declare const autoTrackMedia: (config: MediaAutoTrackConfig, eventBuffer: EventBuffer<PersonalizeBufferEvent>) => Promise<void>;
export {};
