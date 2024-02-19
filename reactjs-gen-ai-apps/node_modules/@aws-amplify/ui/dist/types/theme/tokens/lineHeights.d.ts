import { DesignTokenValues, LineHeightValue, OutputVariantKey, RecursiveDesignToken } from './types/designToken';
type LineHeightSize = 'small' | 'medium' | 'large';
export type LineHeights<Output extends OutputVariantKey = unknown, Platform = unknown> = DesignTokenValues<LineHeightSize, LineHeightValue, Output, Platform> & RecursiveDesignToken<LineHeightValue, Output, Platform>;
export declare const lineHeights: LineHeights<'default'>;
export {};
