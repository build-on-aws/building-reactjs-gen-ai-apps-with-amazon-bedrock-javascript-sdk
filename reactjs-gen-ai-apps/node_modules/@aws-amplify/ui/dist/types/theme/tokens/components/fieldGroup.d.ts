import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type FieldGroupTokens<Output extends OutputVariantKey> = DesignTokenProperties<'gap', Output> & {
    vertical?: DesignTokenProperties<'alignItems', Output>;
    outer?: DesignTokenProperties<'alignItems', Output>;
};
export declare const fieldgroup: Required<FieldGroupTokens<'default'>>;
