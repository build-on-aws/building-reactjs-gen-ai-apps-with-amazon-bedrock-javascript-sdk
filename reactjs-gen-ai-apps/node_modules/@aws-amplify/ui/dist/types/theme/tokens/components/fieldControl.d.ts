import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type FieldControlSizeTokens<Output> = DesignTokenProperties<'fontSize' | 'paddingBlockStart' | 'paddingBlockEnd' | 'paddingInlineStart' | 'paddingInlineEnd', Output>;
type FieldControlFocusTokens<Output> = DesignTokenProperties<'borderColor' | 'boxShadow', Output>;
type FieldControlDisabledTokens<Output> = DesignTokenProperties<'color' | 'cursor' | 'borderColor' | 'backgroundColor', Output>;
type FieldControlErrorTokens<Output> = DesignTokenProperties<'borderColor' | 'color', Output> & {
    _focus?: DesignTokenProperties<'boxShadow', Output>;
};
type FieldControlQuietTokens<Output> = DesignTokenProperties<'borderStyle' | 'borderInlineStart' | 'borderInlineEnd' | 'borderBlockStart' | 'borderRadius', Output> & {
    _focus?: DesignTokenProperties<'borderBlockEndColor' | 'boxShadow', Output>;
    _error?: DesignTokenProperties<'borderBlockEndColor', Output> & {
        _focus?: DesignTokenProperties<'borderBlockEndColor' | 'boxShadow', Output>;
    };
};
export type FieldControlTokens<Output extends OutputVariantKey> = DesignTokenProperties<'borderStyle' | 'borderColor' | 'borderWidth' | 'borderRadius' | 'color' | 'paddingBlockStart' | 'paddingBlockEnd' | 'paddingInlineStart' | 'paddingInlineEnd' | 'fontSize' | 'lineHeight' | 'transitionDuration' | 'outlineColor' | 'outlineStyle' | 'outlineWidth' | 'outlineOffset', Output> & {
    small?: FieldControlSizeTokens<Output>;
    large?: FieldControlSizeTokens<Output>;
    quiet?: FieldControlQuietTokens<Output>;
    _focus?: FieldControlFocusTokens<Output>;
    _disabled?: FieldControlDisabledTokens<Output>;
    _error?: FieldControlErrorTokens<Output>;
    info?: {
        _focus?: DesignTokenProperties<'boxShadow', Output>;
    };
    warning?: {
        _focus?: DesignTokenProperties<'boxShadow', Output>;
    };
    success?: {
        _focus?: DesignTokenProperties<'boxShadow', Output>;
    };
    overlay?: {
        _focus?: DesignTokenProperties<'boxShadow', Output>;
    };
};
export declare const fieldcontrol: Required<FieldControlTokens<'default'>>;
export {};
