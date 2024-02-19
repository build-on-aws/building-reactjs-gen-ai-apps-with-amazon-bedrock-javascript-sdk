import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type ImageTokens<Output extends OutputVariantKey> = DesignTokenProperties<'maxWidth' | 'height' | 'objectFit' | 'objectPosition', Output>;
export declare const image: Required<ImageTokens<'default'>>;
