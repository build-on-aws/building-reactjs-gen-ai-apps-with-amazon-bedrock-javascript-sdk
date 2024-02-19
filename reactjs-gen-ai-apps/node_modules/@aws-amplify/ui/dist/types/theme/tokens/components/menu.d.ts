import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type MenuSizeTokens<Output> = DesignTokenProperties<'width' | 'height', Output>;
export type MenuTokens<Output extends OutputVariantKey> = DesignTokenProperties<'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'boxShadow' | 'flexDirection' | 'gap' | 'maxWidth' | 'minWidth', Output> & {
    small?: MenuSizeTokens<Output>;
    large?: MenuSizeTokens<Output>;
    item?: DesignTokenProperties<'minHeight' | 'paddingInlineEnd' | 'paddingInlineStart', Output>;
};
export declare const menu: Required<MenuTokens<'default'>>;
export {};
