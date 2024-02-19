import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type FlexTokens<Output extends OutputVariantKey> = DesignTokenProperties<'gap' | 'justifyContent' | 'alignItems' | 'alignContent' | 'flexWrap', Output>;
export declare const flex: Required<FlexTokens<'default'>>;
