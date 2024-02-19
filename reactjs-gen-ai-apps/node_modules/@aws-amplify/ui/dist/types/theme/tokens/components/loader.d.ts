import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type LoaderSizeTokens<Output> = DesignTokenProperties<'fontSize' | 'height' | 'width', Output>;
type LoaderLinearSizeTokens<Output> = DesignTokenProperties<'fontSize' | 'strokeWidth', Output>;
type BaseLoaderTokens<Output> = DesignTokenProperties<'animationDuration' | 'fontSize' | 'height' | 'strokeEmpty' | 'strokeFilled' | 'strokeLinecap' | 'width', Output>;
export type LoaderTokens<Output extends OutputVariantKey> = BaseLoaderTokens<Output> & {
    small?: LoaderSizeTokens<Output>;
    large?: LoaderSizeTokens<Output>;
    linear?: Omit<BaseLoaderTokens<Output> & DesignTokenProperties<'minWidth' | 'strokeWidth', Output> & {
        small?: LoaderLinearSizeTokens<Output>;
        large?: LoaderLinearSizeTokens<Output>;
    }, Output extends 'default' ? 'height' : never>;
    text?: DesignTokenProperties<'fill', Output>;
};
export declare const loader: Required<LoaderTokens<'default'>>;
export {};
