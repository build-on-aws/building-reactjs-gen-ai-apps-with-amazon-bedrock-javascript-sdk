import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type SelectFieldTokens<Output extends OutputVariantKey> = DesignTokenProperties<'borderColor' | 'color' | 'flexDirection' | 'fontSize', Output> & {
    _focus?: DesignTokenProperties<'borderColor', Output>;
    label?: DesignTokenProperties<'color', Output>;
};
export declare const selectfield: Required<SelectFieldTokens<'default'>>;
