export type PersonalizeEvent = {
    userId?: string;
    eventId?: string;
    eventType: string;
    properties: Record<string, unknown>;
};
export type RecordInput = PersonalizeEvent;
