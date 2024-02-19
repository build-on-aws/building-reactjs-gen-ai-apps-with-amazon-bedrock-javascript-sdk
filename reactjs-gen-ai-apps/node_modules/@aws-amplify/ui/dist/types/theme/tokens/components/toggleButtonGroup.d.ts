import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type ToggleButtonGroupTokenKey = 'alignItems' | 'alignContent' | 'justifyContent';
export type ToggleButtonGroupTokens<Output extends OutputVariantKey> = DesignTokenProperties<ToggleButtonGroupTokenKey, Output>;
export declare const togglebuttongroup: Required<ToggleButtonGroupTokens<'default'>>;
export {};
