import { DesignTokenValues, OutputVariantKey, RecursiveDesignToken, TimeValue } from './types/designToken';
type Duration = 'short' | 'medium' | 'long';
export type Time<Output extends OutputVariantKey = unknown, Platform = unknown> = DesignTokenValues<Duration, TimeValue<Platform, Output>, Output, Platform> & RecursiveDesignToken<TimeValue<Platform, Output>, Output, Platform>;
export declare const time: Time<'default'>;
export {};
