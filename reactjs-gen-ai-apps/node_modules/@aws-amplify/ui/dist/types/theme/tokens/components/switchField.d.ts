import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type SwitchFieldSizeTokens<OutputType> = DesignTokenProperties<'fontSize', OutputType>;
type SwitchFieldTrackCheckedTokens<OutputType> = DesignTokenProperties<'backgroundColor', OutputType>;
export type SwitchFieldTokens<OutputType extends OutputVariantKey> = DesignTokenProperties<'fontSize', OutputType> & {
    _disabled?: DesignTokenProperties<'opacity', OutputType>;
    _focused?: DesignTokenProperties<'shadow', OutputType>;
    large?: SwitchFieldSizeTokens<OutputType>;
    small?: SwitchFieldSizeTokens<OutputType>;
    label?: DesignTokenProperties<'padding', OutputType>;
    thumb?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'borderStyle' | 'borderWidth' | 'borderRadius' | 'width', OutputType> & {
        checked?: DesignTokenProperties<'transform', OutputType>;
        transition?: DesignTokenProperties<'duration', OutputType>;
    };
    track?: DesignTokenProperties<'backgroundColor' | 'borderRadius' | 'height' | 'width' | 'padding', OutputType> & {
        checked?: SwitchFieldTrackCheckedTokens<OutputType>;
        transition?: DesignTokenProperties<'duration', OutputType>;
        _error?: SwitchFieldTrackCheckedTokens<OutputType>;
    };
};
export declare const switchfield: Required<SwitchFieldTokens<'default'>>;
export {};
