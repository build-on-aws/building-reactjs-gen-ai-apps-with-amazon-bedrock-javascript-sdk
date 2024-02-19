import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type RatingTokens<Output extends OutputVariantKey> = {
    large?: DesignTokenProperties<'size', Output>;
    default?: DesignTokenProperties<'size', Output>;
    small?: DesignTokenProperties<'size', Output>;
    filled?: DesignTokenProperties<'color', Output>;
    empty?: DesignTokenProperties<'color', Output>;
};
export declare const rating: Required<RatingTokens<'default'>>;
