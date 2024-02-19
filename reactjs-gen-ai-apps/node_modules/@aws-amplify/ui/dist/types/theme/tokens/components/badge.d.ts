import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type VariationKey = 'backgroundColor' | 'color';
type BadgeVariationTokens<OutputType> = DesignTokenProperties<VariationKey, OutputType>;
type SizeKey = 'fontSize' | 'paddingHorizontal' | 'paddingVertical';
type BadgeSizeTokens<OutputType> = DesignTokenProperties<SizeKey, OutputType>;
type BadgeKey = 'backgroundColor' | 'borderRadius' | 'color' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'paddingHorizontal' | 'paddingVertical' | 'textAlign';
export type BadgeTokens<OutputType extends OutputVariantKey> = DesignTokenProperties<BadgeKey, OutputType> & {
    error?: BadgeVariationTokens<OutputType>;
    large?: BadgeSizeTokens<OutputType>;
    small?: BadgeSizeTokens<OutputType>;
    info?: BadgeVariationTokens<OutputType>;
    success?: BadgeVariationTokens<OutputType>;
    warning?: BadgeVariationTokens<OutputType>;
};
export declare const badge: Required<BadgeTokens<'default'>>;
export {};
