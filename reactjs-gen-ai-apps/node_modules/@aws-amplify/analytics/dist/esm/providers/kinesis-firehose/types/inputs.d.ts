import { KinesisEventData } from '../../../types';
export type RecordInput = {
    streamName: string;
    data: KinesisEventData;
};
