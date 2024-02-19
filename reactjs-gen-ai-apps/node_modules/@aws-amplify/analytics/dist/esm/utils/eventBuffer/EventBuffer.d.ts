import { EventBufferConfig, IAnalyticsClient } from './';
export declare class EventBuffer<T> {
    private list;
    private readonly config;
    private getAnalyticsClient;
    private timer?;
    constructor(config: EventBufferConfig, getAnalyticsClient: () => IAnalyticsClient<T>);
    append(...events: T[]): void;
    flushAll(): Promise<void>;
    release(): void;
    get length(): number;
    private head;
    private insertAtBeginning;
    private startEventLoop;
    private submitEvents;
}
