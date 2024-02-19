import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type ToggleButtonStateTokens<Output> = DesignTokenProperties<'backgroundColor' | 'color', Output>;
export type ToggleButtonTokens<Output extends OutputVariantKey> = DesignTokenProperties<'borderColor' | 'color', Output> & {
    _hover?: DesignTokenProperties<'backgroundColor', Output>;
    _focus?: DesignTokenProperties<'borderColor' | 'color', Output>;
    _active?: DesignTokenProperties<'backgroundColor', Output>;
    _disabled?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'color', Output>;
    _pressed?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'color', Output> & {
        _hover?: DesignTokenProperties<'backgroundColor', Output>;
    };
    primary?: DesignTokenProperties<'backgroundColor' | 'borderWidth', Output> & {
        _focus?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'boxShadow' | 'color', Output>;
        _hover?: DesignTokenProperties<'backgroundColor' | 'color', Output>;
        _disabled?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'color', Output>;
        _pressed?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'color', Output> & {
            _focus?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'color', Output>;
            _hover?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'boxShadow' | 'color', Output>;
        };
    };
    link?: DesignTokenProperties<'backgroundColor' | 'color'> & {
        _hover?: ToggleButtonStateTokens<Output>;
        _focus?: ToggleButtonStateTokens<Output>;
        _disabled?: ToggleButtonStateTokens<Output>;
        _pressed?: ToggleButtonStateTokens<Output> & {
            _hover?: ToggleButtonStateTokens<Output>;
            _focus?: ToggleButtonStateTokens<Output>;
        };
    };
};
export declare const togglebutton: Required<ToggleButtonTokens<'default'>>;
export {};
