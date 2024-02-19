import { DesignTokenValues, OutlineWidthValue, OutputVariantKey, RecursiveDesignToken } from './types/designToken';
type OutlineWidthSize = 'small' | 'medium' | 'large';
export type OutlineWidths<Output extends OutputVariantKey = unknown, Platform = unknown> = DesignTokenValues<OutlineWidthSize, OutlineWidthValue, Output, Platform> & RecursiveDesignToken<OutlineWidthValue, Output, Platform>;
export declare const outlineWidths: OutlineWidths<'default'>;
export {};
