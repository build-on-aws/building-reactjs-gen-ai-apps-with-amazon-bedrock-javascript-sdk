import { PushNotificationMessage } from './module';
export type OnTokenReceivedHandler = (token: string) => void;
export type OnPushNotificationMessageHandler = (message: PushNotificationMessage) => void;
export type PushNotificationEvent = 'backgroundMessageReceived' | 'foregroundMessageReceived' | 'launchNotificationOpened' | 'notificationOpened' | 'tokenReceived';
