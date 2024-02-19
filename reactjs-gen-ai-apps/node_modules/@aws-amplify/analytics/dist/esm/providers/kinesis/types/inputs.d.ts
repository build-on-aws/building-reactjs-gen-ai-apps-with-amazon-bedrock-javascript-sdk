import { KinesisEventData } from '../../../types';
export type RecordInput = {
    streamName: string;
    partitionKey: string;
    data: KinesisEventData;
};
