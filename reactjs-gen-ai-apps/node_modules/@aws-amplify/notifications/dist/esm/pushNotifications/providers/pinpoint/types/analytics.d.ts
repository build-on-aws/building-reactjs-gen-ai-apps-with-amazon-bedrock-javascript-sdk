export type PinpointMessageEvent = 'opened_notification' | 'received_background' | 'received_foreground';
export type PinpointMessageEventSource = '_campaign' | '_journey';
export type AnalyticsEventAttributes = {
    source: PinpointMessageEventSource;
    attributes: Record<string, string>;
};
