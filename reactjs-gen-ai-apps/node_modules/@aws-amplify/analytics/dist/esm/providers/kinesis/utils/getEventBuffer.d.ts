import { KinesisBufferEvent, KinesisEventBufferConfig } from '../types';
import { EventBuffer } from '../../../utils';
export declare const getEventBuffer: ({ region, flushInterval, flushSize, bufferSize, credentials, identityId, resendLimit, userAgentValue, }: KinesisEventBufferConfig) => EventBuffer<KinesisBufferEvent>;
