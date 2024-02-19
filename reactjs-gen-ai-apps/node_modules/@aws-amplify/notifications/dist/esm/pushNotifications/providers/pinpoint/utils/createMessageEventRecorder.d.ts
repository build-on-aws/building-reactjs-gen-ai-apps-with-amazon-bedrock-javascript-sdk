import { PinpointMessageEvent } from '../types';
import { OnPushNotificationMessageHandler } from '../../../types';
/**
 * @internal
 */
export declare const createMessageEventRecorder: (event: PinpointMessageEvent, callback?: Function) => OnPushNotificationMessageHandler;
