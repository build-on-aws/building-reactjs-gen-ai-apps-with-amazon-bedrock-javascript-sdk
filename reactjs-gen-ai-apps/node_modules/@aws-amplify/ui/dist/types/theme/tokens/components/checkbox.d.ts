import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type ButtonFocusToken<Output> = DesignTokenProperties<'outlineColor' | 'outlineStyle' | 'outlineWidth' | 'outlineOffset' | 'borderColor' | 'boxShadow', Output>;
type BeforeToken<Output> = DesignTokenProperties<'width' | 'height' | 'borderWidth' | 'borderRadius' | 'borderStyle' | 'borderColor', Output>;
type ButtonToken<Output> = DesignTokenProperties<'position' | 'alignItems' | 'justifyContent' | 'color', Output> & {
    before?: BeforeToken<Output>;
    _focus?: ButtonFocusToken<Output>;
    _disabled?: DesignTokenProperties<'borderColor', Output>;
    _error?: DesignTokenProperties<'borderColor', Output> & {
        _focus?: DesignTokenProperties<'borderColor' | 'boxShadow', Output>;
    };
};
type IconCheckedStateToken<Output> = DesignTokenProperties<'opacity' | 'transform', Output> & {
    _disabled?: DesignTokenProperties<'backgroundColor', Output>;
};
type IconToken<Output> = DesignTokenProperties<'backgroundColor' | 'borderRadius' | 'opacity' | 'transform' | 'transitionProperty' | 'transitionDuration' | 'transitionTimingFunction', Output> & {
    _checked?: IconCheckedStateToken<Output>;
    _indeterminate?: IconCheckedStateToken<Output>;
};
export type CheckboxTokens<Output extends OutputVariantKey> = DesignTokenProperties<'alignItems' | 'cursor', Output> & {
    _disabled?: DesignTokenProperties<'cursor', Output>;
    button?: ButtonToken<Output>;
    icon?: IconToken<Output>;
    label?: {
        _disabled?: DesignTokenProperties<'color', Output>;
    };
};
export declare const checkbox: Required<CheckboxTokens<'default'>>;
export {};
