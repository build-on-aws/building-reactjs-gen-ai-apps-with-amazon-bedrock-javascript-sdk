import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type CheckboxFieldTokens<Output extends OutputVariantKey> = DesignTokenProperties<'alignItems' | 'alignContent' | 'flexDirection' | 'justifyContent', Output>;
export declare const checkboxfield: Required<CheckboxFieldTokens<'default'>>;
