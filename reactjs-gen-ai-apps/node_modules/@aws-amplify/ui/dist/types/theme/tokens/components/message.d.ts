import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type MessageColorThemeTokens<OutputType> = DesignTokenProperties<'backgroundColor' | 'color' | 'borderColor', OutputType>;
type MessageVariationTokens<OutputType> = DesignTokenProperties<'backgroundColor' | 'color' | 'borderColor', OutputType> & {
    info?: MessageColorThemeTokens<OutputType>;
    error?: MessageColorThemeTokens<OutputType>;
    warning?: MessageColorThemeTokens<OutputType>;
    success?: MessageColorThemeTokens<OutputType>;
};
type MessageTokenKey = 'alignItems' | 'justifyContent' | 'color' | 'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'lineHeight' | 'paddingBlock' | 'paddingInline';
export type MessageTokens<OutputType extends OutputVariantKey> = DesignTokenProperties<MessageTokenKey, OutputType> & {
    icon?: DesignTokenProperties<'size', OutputType>;
    heading?: DesignTokenProperties<'fontSize' | 'fontWeight', OutputType>;
    dismiss?: DesignTokenProperties<'gap', OutputType>;
    plain?: MessageVariationTokens<OutputType>;
    outlined?: MessageVariationTokens<OutputType>;
    filled?: MessageVariationTokens<OutputType>;
};
export declare const message: Required<MessageTokens<'default'>>;
export {};
