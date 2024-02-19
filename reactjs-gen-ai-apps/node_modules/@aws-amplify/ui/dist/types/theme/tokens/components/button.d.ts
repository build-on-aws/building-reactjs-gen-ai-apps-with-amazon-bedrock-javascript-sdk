import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type StateTokens<Output> = DesignTokenProperties<'backgroundColor' | 'borderColor' | 'color', Output>;
type ColorThemeTokens<Output> = DesignTokenProperties<'backgroundColor' | 'borderColor' | 'color', Output> & {
    _hover?: StateTokens<Output>;
    _focus?: StateWithShadowTokens<Output>;
    _active?: StateTokens<Output>;
};
type StateWithShadowTokens<Output> = StateTokens<Output> & DesignTokenProperties<'boxShadow', Output>;
type MenuStateTokens<Output> = Omit<StateTokens<Output>, 'borderColor'>;
type PrimaryVariationTokens<Output> = StateTokens<Output> & DesignTokenProperties<'borderStyle' | 'borderWidth', Output> & {
    _disabled?: StateTokens<Output>;
    _loading?: StateTokens<Output>;
    _hover?: StateTokens<Output>;
    _focus?: StateWithShadowTokens<Output>;
    _active?: StateTokens<Output>;
    info?: ColorThemeTokens<Output>;
    error?: ColorThemeTokens<Output>;
    success?: ColorThemeTokens<Output>;
    warning?: ColorThemeTokens<Output>;
    overlay?: ColorThemeTokens<Output>;
};
type MenuVariationTokens<Output> = DesignTokenProperties<'backgroundColor' | 'borderWidth' | 'justifyContent', Output> & {
    _hover?: MenuStateTokens<Output>;
    _focus?: MenuStateTokens<Output>;
    _active?: MenuStateTokens<Output>;
    _disabled?: Omit<StateTokens<Output>, 'borderColor' | 'backgroundColor'>;
};
type LinkVariationTokens<Output> = DesignTokenProperties<'backgroundColor' | 'borderColor' | 'borderWidth' | 'color', Output> & {
    _hover?: StateTokens<Output>;
    _focus?: StateWithShadowTokens<Output>;
    _active?: StateTokens<Output>;
    _disabled?: StateTokens<Output>;
    _loading?: StateTokens<Output>;
    info?: ColorThemeTokens<Output>;
    error?: ColorThemeTokens<Output>;
    success?: ColorThemeTokens<Output>;
    warning?: ColorThemeTokens<Output>;
    overlay?: ColorThemeTokens<Output>;
};
type OutlinedVariationTokens<Output> = {
    info?: ColorThemeTokens<Output>;
    error?: ColorThemeTokens<Output>;
    success?: ColorThemeTokens<Output>;
    warning?: ColorThemeTokens<Output>;
    overlay?: ColorThemeTokens<Output>;
};
type ButtonSizeTokens<Output> = DesignTokenProperties<'fontSize' | 'paddingBlockStart' | 'paddingBlockEnd' | 'paddingInlineStart' | 'paddingInlineEnd', Output>;
export type ButtonTokens<Output extends OutputVariantKey> = DesignTokenProperties<'fontWeight' | 'transitionDuration' | 'fontSize' | 'lineHeight' | 'paddingBlockStart' | 'paddingBlockEnd' | 'paddingInlineStart' | 'paddingInlineEnd' | 'backgroundColor' | 'borderColor' | 'borderWidth' | 'borderStyle' | 'borderRadius' | 'color', Output> & {
    _hover?: StateTokens<Output>;
    _focus?: StateWithShadowTokens<Output>;
    _active?: StateTokens<Output>;
    _loading?: StateTokens<Output>;
    _disabled?: StateTokens<Output>;
    primary?: PrimaryVariationTokens<Output>;
    warning?: LinkVariationTokens<Output>;
    destructive?: PrimaryVariationTokens<Output>;
    menu?: MenuVariationTokens<Output>;
    link?: LinkVariationTokens<Output>;
    outlined?: OutlinedVariationTokens<Output>;
    small?: ButtonSizeTokens<Output>;
    large?: ButtonSizeTokens<Output>;
    loaderWrapper?: DesignTokenProperties<'alignItems' | 'gap', Output>;
};
export declare const button: Required<ButtonTokens<'default'>>;
export {};
