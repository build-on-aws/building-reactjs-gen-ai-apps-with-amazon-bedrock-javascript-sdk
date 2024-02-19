export interface IAnalyticsClient<T> {
    (events: T[]): Promise<T[]>;
}
export type EventBufferConfig = {
    flushSize: number;
    flushInterval: number;
    bufferSize: number;
};
