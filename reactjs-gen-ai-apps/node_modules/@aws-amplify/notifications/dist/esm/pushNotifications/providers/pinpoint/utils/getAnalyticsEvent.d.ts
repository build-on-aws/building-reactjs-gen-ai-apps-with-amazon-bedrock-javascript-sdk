import { PinpointAnalyticsEvent } from '@aws-amplify/core/internals/providers/pinpoint';
import { PinpointMessageEvent } from '../types';
import { PushNotificationMessage } from '../../../types';
/**
 * @internal
 */
export declare const getAnalyticsEvent: ({ data }: PushNotificationMessage, event: PinpointMessageEvent) => PinpointAnalyticsEvent | null;
