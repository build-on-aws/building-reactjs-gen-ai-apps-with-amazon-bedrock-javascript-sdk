import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type IconTokens<Output extends OutputVariantKey> = DesignTokenProperties<'height' | 'lineHeight', Output>;
export declare const icon: Required<IconTokens<'default'>>;
