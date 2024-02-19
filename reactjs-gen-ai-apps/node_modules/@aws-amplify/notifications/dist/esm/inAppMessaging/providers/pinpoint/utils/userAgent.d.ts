import { InAppMessagingAction } from '@aws-amplify/core/internals/utils';
import { UserAgent } from '@aws-sdk/types';
export declare function getInAppMessagingUserAgent(action: InAppMessagingAction): UserAgent;
export declare function getInAppMessagingUserAgentString(action: InAppMessagingAction): string;
