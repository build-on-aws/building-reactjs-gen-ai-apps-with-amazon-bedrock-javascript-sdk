import { DesignTokenValues, FontWeightValue, OutputVariantKey, RecursiveDesignToken } from './types/designToken';
type FontWeight = 'hairline' | 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
export type FontWeights<Output extends OutputVariantKey = unknown, Platform = unknown> = DesignTokenValues<FontWeight, FontWeightValue<Platform, Output>, Output, Platform> & RecursiveDesignToken<FontWeightValue<Platform, Output>, Output, Platform>;
export declare const fontWeights: FontWeights<'default'>;
export {};
