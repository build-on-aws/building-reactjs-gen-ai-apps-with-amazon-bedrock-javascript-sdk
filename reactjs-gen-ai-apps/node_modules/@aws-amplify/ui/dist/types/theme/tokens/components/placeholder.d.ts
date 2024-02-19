import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type PlaceholderSizeTokens<Output> = DesignTokenProperties<'height', Output>;
export type PlaceholderTokens<Output extends OutputVariantKey> = DesignTokenProperties<'borderRadius' | 'transitionDuration' | 'startColor' | 'endColor', Output> & {
    small?: PlaceholderSizeTokens<Output>;
    default?: PlaceholderSizeTokens<Output>;
    large?: PlaceholderSizeTokens<Output>;
};
export declare const placeholder: Required<PlaceholderTokens<'default'>>;
export {};
