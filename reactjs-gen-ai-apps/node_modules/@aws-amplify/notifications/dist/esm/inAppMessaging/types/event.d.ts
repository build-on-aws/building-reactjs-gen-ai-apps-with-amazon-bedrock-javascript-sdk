export type InAppMessageInteractionEvent = 'messageReceived' | 'messageDisplayed' | 'messageDismissed' | 'messageActionTaken';
export type InAppMessagingEvent = {
    name: string;
    attributes?: Record<string, string>;
    metrics?: Record<string, number>;
};
