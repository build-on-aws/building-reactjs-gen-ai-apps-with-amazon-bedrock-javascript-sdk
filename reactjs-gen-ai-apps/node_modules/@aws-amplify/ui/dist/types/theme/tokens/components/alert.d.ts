import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type AlertVariationTokens<OutputType> = DesignTokenProperties<'backgroundColor' | 'color', OutputType>;
type AlertIconTokens<OutputType> = DesignTokenProperties<'size', OutputType>;
type AlertHeadingTokens<OutputType> = DesignTokenProperties<'fontSize' | 'fontWeight', OutputType>;
type AlertTokenKey = 'alignItems' | 'justifyContent' | 'color' | 'backgroundColor' | 'paddingBlock' | 'paddingInline';
export type AlertTokens<OutputType extends OutputVariantKey> = DesignTokenProperties<AlertTokenKey, OutputType> & {
    icon?: AlertIconTokens<OutputType>;
    heading?: AlertHeadingTokens<OutputType>;
    info?: AlertVariationTokens<OutputType>;
    error?: AlertVariationTokens<OutputType>;
    warning?: AlertVariationTokens<OutputType>;
    success?: AlertVariationTokens<OutputType>;
};
export declare const alert: Required<AlertTokens<'default'>>;
export {};
