import { AnalyticsAction } from '@aws-amplify/core/internals/utils';
import { UserAgent } from '@aws-sdk/types';
export declare function getAnalyticsUserAgent(action: AnalyticsAction): UserAgent;
export declare function getAnalyticsUserAgentString(action: AnalyticsAction): string;
