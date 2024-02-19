import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type RadioButtonSizeTokens<Output> = DesignTokenProperties<'width' | 'height', Output>;
export type RadioTokens<Output extends OutputVariantKey> = DesignTokenProperties<'alignItems' | 'justifyContent' | 'gap', Output> & {
    _disabled?: DesignTokenProperties<'cursor', Output>;
    button?: DesignTokenProperties<'alignItems' | 'justifyContent' | 'width' | 'height' | 'boxSizing' | 'borderWidth' | 'borderStyle' | 'borderRadius' | 'borderColor' | 'color' | 'backgroundColor' | 'transitionProperty' | 'transitionDuration' | 'outlineColor' | 'outlineStyle' | 'outlineWidth' | 'outlineOffset' | 'padding', Output> & {
        small?: RadioButtonSizeTokens<Output>;
        large?: RadioButtonSizeTokens<Output>;
        _checked?: DesignTokenProperties<'color', Output> & {
            _disabled?: DesignTokenProperties<'color', Output>;
        };
        _focus?: DesignTokenProperties<'borderColor' | 'boxShadow', Output>;
        _error?: DesignTokenProperties<'borderColor', Output> & {
            _focus?: DesignTokenProperties<'boxShadow', Output>;
        };
        _disabled?: DesignTokenProperties<'borderColor' | 'backgroundColor', Output>;
    };
    label?: DesignTokenProperties<'color', Output> & {
        _disabled?: DesignTokenProperties<'color', Output>;
    };
};
export declare const radio: Required<RadioTokens<'default'>>;
export {};
