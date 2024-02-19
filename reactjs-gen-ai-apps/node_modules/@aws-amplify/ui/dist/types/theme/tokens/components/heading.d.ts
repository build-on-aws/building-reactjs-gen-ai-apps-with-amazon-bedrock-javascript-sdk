import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type HeadingLevelTokens<Output> = DesignTokenProperties<'fontSize' | 'fontWeight', Output>;
type Level = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingTokens<Output extends OutputVariantKey> = DesignTokenProperties<'color' | 'lineHeight', Output> & Partial<Record<Level, HeadingLevelTokens<Output>>>;
export declare const heading: Required<HeadingTokens<'default'>>;
export {};
