import { InAppMessageInteractionEvent } from '../inAppMessaging/types';
import { PushNotificationEvent } from '../pushNotifications/types';
export interface EventListener<EventHandler extends Function> {
    handleEvent: EventHandler;
    remove: () => void;
}
export type EventType = InAppMessageInteractionEvent | PushNotificationEvent;
export type EventListenerRemover = {
    remove: () => void;
};
