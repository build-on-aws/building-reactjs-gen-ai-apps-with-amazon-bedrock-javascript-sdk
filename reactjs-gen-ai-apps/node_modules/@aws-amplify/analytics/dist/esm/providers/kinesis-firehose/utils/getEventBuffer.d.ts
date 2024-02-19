import { EventBuffer } from '../../../utils';
import { KinesisFirehoseBufferEvent, KinesisFirehoseEventBufferConfig } from '../types';
export declare const getEventBuffer: ({ region, credentials, identityId, bufferSize, flushSize, flushInterval, resendLimit, userAgentValue, }: KinesisFirehoseEventBufferConfig) => EventBuffer<KinesisFirehoseBufferEvent>;
