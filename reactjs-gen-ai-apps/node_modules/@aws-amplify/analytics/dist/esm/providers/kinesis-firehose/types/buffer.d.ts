import { EventBufferConfig } from '../../../utils';
import { KinesisStream } from '../../../types';
import { AWSCredentials } from '@aws-amplify/core/internals/utils';
export type KinesisFirehoseBufferEvent = KinesisStream & {
    event: Uint8Array;
    retryCount: number;
    timestamp: number;
};
export type KinesisFirehoseEventBufferConfig = EventBufferConfig & {
    region: string;
    credentials: AWSCredentials;
    identityId?: string;
    resendLimit?: number;
    userAgentValue?: string;
};
