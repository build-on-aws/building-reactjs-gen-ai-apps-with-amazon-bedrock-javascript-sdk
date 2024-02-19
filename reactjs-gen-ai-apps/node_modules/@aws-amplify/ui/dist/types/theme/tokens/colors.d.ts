import { ColorValue, DesignTokenValues, OutputVariantKey, RecursiveDesignToken } from './types/designToken';
/**
 * Util type for creating color interfaces using `ColorValue` from string and number unions
 */
type BaseColorValues<VariantKey extends string | number, Output, Platform = unknown> = RecursiveDesignToken<ColorValue, Output, Platform> & DesignTokenValues<VariantKey, ColorValue, Output, Platform>;
export type ColorValues<VariantKey extends string | number, Output, Platform = unknown> = Output extends 'required' | 'default' ? BaseColorValues<VariantKey, Output, Platform> : Partial<BaseColorValues<VariantKey, Output, Platform>>;
/**
 * Util type for creating nested color scale interfaces from variant keys
 */
type BaseColorValueScale<VariantKey extends string | number, Output, Platform = unknown> = Record<VariantKey, ColorValues<ScaleKey, Output, Platform>>;
type ColorValueScale<VariantKey extends string | number, Output, Platform = unknown> = Output extends 'required' | 'default' ? BaseColorValueScale<VariantKey, Output, Platform> : Partial<BaseColorValueScale<VariantKey, Output, Platform>>;
export type ScaleKey = 10 | 20 | 40 | 60 | 80 | 90 | 100;
type OverlayKey = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
type ColorPaletteKey = 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink' | 'neutral' | 'primary' | 'secondary';
type GreyscalePaletteKey = 'white' | 'black' | 'transparent';
type OrderVariant = 'primary' | 'secondary' | 'tertiary';
type OrderVariantKey<Output = unknown> = Output extends 'default' ? Exclude<OrderVariant, 'quaternary'> : OrderVariant;
type InformationVariantKey = 'info' | 'warning' | 'error' | 'success';
type WebStateVariantKey = 'active' | 'disabled' | 'error' | 'hover' | 'focus' | 'pressed';
type ReactNativeStateVariantKey = Exclude<WebStateVariantKey, 'focused' | 'hover'>;
type StateVariantKey<Platform> = Platform extends 'react-native' ? ReactNativeStateVariantKey : WebStateVariantKey;
type FontVariantKey<Output, Platform> = 'inverse' | 'interactive' | Extract<StateVariantKey<Platform>, 'active' | 'disabled' | 'hover' | 'focus'> | OrderVariantKey<Output> | InformationVariantKey;
type BackgroundColorKey<Platform> = Extract<StateVariantKey<Platform>, 'disabled'> | OrderVariantKey | InformationVariantKey | 'quaternary';
type BorderColorKey<Output, Platform> = Extract<StateVariantKey<Platform>, 'disabled'> | OrderVariantKey<Output> | InformationVariantKey | (Output extends 'default' ? Exclude<StateVariantKey<Platform>, 'active' | 'hover'> : StateVariantKey<Platform>);
type PaletteValues<Output, Platform> = ColorValueScale<ColorPaletteKey, Output, Platform>;
type GreyscaleColors<Output, Platform> = ColorValues<GreyscalePaletteKey, Output, Platform>;
type BaseColors<Output extends OutputVariantKey = unknown, Platform = unknown> = PaletteValues<Output, Platform> & GreyscaleColors<Output, Platform> & {
    background?: ColorValues<BackgroundColorKey<Platform>, Output, Platform>;
    border?: ColorValues<BorderColorKey<Output, Platform>, Output, Platform>;
    font?: ColorValues<FontVariantKey<Output, Platform>, Output, Platform>;
    overlay?: ColorValues<OverlayKey, Output, Platform>;
    shadow?: ColorValues<OrderVariantKey, Output, Platform>;
} & RecursiveDesignToken<ColorValue, Output, Platform>;
export type Colors<Output extends OutputVariantKey = unknown, Platform = unknown> = Output extends 'required' | 'default' ? Required<BaseColors<Output, Platform>> : BaseColors<Output, Platform>;
export declare const colors: Colors<'default'>;
export {};
