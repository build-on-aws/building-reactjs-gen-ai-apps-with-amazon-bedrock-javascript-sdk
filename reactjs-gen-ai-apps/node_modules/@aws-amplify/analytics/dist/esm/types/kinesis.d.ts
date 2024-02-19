export type KinesisStream = {
    region: string;
    streamName: string;
};
export type KinesisShard = KinesisStream & {
    partitionKey: string;
};
export type KinesisEventData = Record<string, unknown> | Uint8Array;
