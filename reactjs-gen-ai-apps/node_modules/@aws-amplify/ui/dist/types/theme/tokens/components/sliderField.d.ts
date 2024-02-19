import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type SliderFieldThumbStateTokens<Output> = DesignTokenProperties<'backgroundColor' | 'borderColor' | 'boxShadow', Output>;
type SliderFieldSizeTokens<Output> = {
    track?: DesignTokenProperties<'height', Output>;
    thumb?: DesignTokenProperties<'height' | 'width', Output>;
};
export type SliderFieldTokens<Output extends OutputVariantKey> = DesignTokenProperties<'paddingBlock', Output> & {
    track?: DesignTokenProperties<'backgroundColor' | 'borderRadius' | 'height' | 'minWidth', Output>;
    range?: DesignTokenProperties<'backgroundColor' | 'borderRadius', Output> & {
        _disabled?: DesignTokenProperties<'backgroundColor', Output>;
    };
    thumb?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'boxShadow' | 'height' | 'width', Output> & {
        _disabled?: SliderFieldThumbStateTokens<Output> & DesignTokenProperties<'boxShadow', Output>;
        _hover?: Omit<SliderFieldThumbStateTokens<Output>, Output extends 'default' ? 'boxShadow' : never>;
        _focus?: Omit<SliderFieldThumbStateTokens<Output>, Output extends 'default' ? 'backgroundColor' : never>;
    };
    small?: SliderFieldSizeTokens<Output>;
    large?: SliderFieldSizeTokens<Output>;
};
export declare const sliderfield: Required<SliderFieldTokens<'default'>>;
export {};
