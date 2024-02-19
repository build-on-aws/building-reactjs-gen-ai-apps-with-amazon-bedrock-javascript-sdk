import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type CardVariationStyleKey = 'backgroundColor' | 'borderRadius' | 'borderWidth' | 'borderStyle' | 'borderColor' | 'boxShadow';
type CardVariationTokens<OutputType> = DesignTokenProperties<CardVariationStyleKey, OutputType>;
export type CardTokens<OutputType extends OutputVariantKey> = CardVariationTokens<OutputType> & DesignTokenProperties<'padding', OutputType> & {
    elevated?: CardVariationTokens<OutputType>;
    outlined?: CardVariationTokens<OutputType>;
};
export declare const card: Required<CardTokens<'default'>>;
export {};
