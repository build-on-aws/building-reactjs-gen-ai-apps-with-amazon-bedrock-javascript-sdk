import { CustomUserAgentDetails, Framework } from './types';
import { UserAgent as AWSUserAgent } from '@aws-sdk/types';
declare class PlatformBuilder {
    userAgent: string;
    get framework(): Framework;
    get isReactNative(): boolean;
    observeFrameworkChanges(fcn: () => void): void;
}
export declare const Platform: PlatformBuilder;
export declare const getAmplifyUserAgentObject: ({ category, action, framework, }?: CustomUserAgentDetails) => AWSUserAgent;
export declare const getAmplifyUserAgent: (customUserAgentDetails?: CustomUserAgentDetails) => string;
export {};
