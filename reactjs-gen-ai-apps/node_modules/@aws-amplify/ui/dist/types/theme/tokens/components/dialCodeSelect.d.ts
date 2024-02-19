import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type DialCodeSelectTokens<Output extends OutputVariantKey> = DesignTokenProperties<'height', Output>;
export declare const dialcodeselect: Required<DialCodeSelectTokens<'default'>>;
