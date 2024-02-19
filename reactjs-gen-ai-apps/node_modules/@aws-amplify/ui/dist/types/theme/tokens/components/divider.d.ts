import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type DividerSizeTokens<Output> = DesignTokenProperties<'borderWidth', Output>;
export type DividerTokens<Output extends OutputVariantKey> = DesignTokenProperties<'borderStyle' | 'borderColor' | 'borderWidth' | 'opacity', Output> & {
    label?: DesignTokenProperties<'color' | 'paddingInline' | 'fontSize' | 'backgroundColor', Output>;
    small?: DividerSizeTokens<Output>;
    large?: DividerSizeTokens<Output>;
};
export declare const divider: Required<DividerTokens<'default'>>;
export {};
