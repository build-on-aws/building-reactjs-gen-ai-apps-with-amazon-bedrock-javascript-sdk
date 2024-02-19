import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type FieldsetSizeTokens<Output> = DesignTokenProperties<'gap', Output>;
export type FieldsetOutlinedTokens<Output> = DesignTokenProperties<'padding' | 'borderColor' | 'borderWidth' | 'borderStyle', Output> & {
    small?: DesignTokenProperties<'padding', Output>;
    large?: DesignTokenProperties<'padding', Output>;
};
export type FieldsetLegendTokens<Output> = DesignTokenProperties<'fontSize' | 'color' | 'fontWeight' | 'lineHeight', Output> & {
    small?: DesignTokenProperties<'fontSize', Output>;
    large?: DesignTokenProperties<'fontSize', Output>;
};
export type FieldsetTokens<Output extends OutputVariantKey> = DesignTokenProperties<'backgroundColor' | 'gap' | 'flexDirection' | 'borderRadius', Output> & {
    legend?: FieldsetLegendTokens<Output>;
    outlined?: FieldsetOutlinedTokens<Output>;
    small?: FieldsetSizeTokens<Output>;
    large?: FieldsetSizeTokens<Output>;
};
export declare const fieldset: Required<FieldsetTokens<'default'>>;
