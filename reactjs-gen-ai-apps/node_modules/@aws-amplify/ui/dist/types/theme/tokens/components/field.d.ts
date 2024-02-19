import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type FieldSizeTokens<Output> = DesignTokenProperties<'fontSize' | 'gap', Output>;
export type FieldTokens<Output extends OutputVariantKey> = FieldSizeTokens<Output> & DesignTokenProperties<'flexDirection', Output> & {
    small?: FieldSizeTokens<Output>;
    large?: FieldSizeTokens<Output>;
    label?: DesignTokenProperties<'color', Output>;
};
export declare const field: Required<FieldTokens<'default'>>;
export {};
