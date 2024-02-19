import { DesignTokenValues, OutputVariantKey, RadiusValue, RecursiveDesignToken } from './types/designToken';
type RadiusSize = 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'xxxl';
export type Radii<Output extends OutputVariantKey = unknown, Platform = unknown> = DesignTokenValues<RadiusSize, RadiusValue<Platform, Output>, Output, Platform> & RecursiveDesignToken<RadiusValue<Platform, Output>, Output, Platform>;
export declare const radii: Radii<'default'>;
export {};
