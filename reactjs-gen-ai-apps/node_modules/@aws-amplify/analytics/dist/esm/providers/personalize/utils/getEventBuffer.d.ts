import { EventBuffer } from '../../../utils';
import { PersonalizeBufferConfig, PersonalizeBufferEvent } from '../types';
export declare const getEventBuffer: ({ region, flushSize, flushInterval, bufferSize, credentials, identityId, userAgentValue, }: PersonalizeBufferConfig) => EventBuffer<PersonalizeBufferEvent>;
