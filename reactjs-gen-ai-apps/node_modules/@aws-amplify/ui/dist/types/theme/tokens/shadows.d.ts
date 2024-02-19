import { DesignTokenValues, OutputVariantKey, RecursiveDesignToken, ShadowValue } from './types/designToken';
type ShadowSize = 'small' | 'medium' | 'large';
export type Shadows<Output extends OutputVariantKey = unknown, Platform = unknown> = DesignTokenValues<ShadowSize, ShadowValue, Output, Platform> & RecursiveDesignToken<ShadowValue, Output, Platform>;
export declare const shadows: Shadows<'default'>;
export {};
