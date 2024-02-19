import { BorderWidths } from './borderWidths';
import { Colors } from './colors';
import { ComponentTokens, DefaultComponentTokens, WebComponentTokens } from './components';
import { Fonts } from './fonts';
import { FontSizes } from './fontSizes';
import { FontWeights } from './fontWeights';
import { LineHeights } from './lineHeights';
import { Opacities } from './opacities';
import { OutlineOffsets } from './outlineOffsets';
import { OutlineWidths } from './outlineWidths';
import { Radii } from './radii';
import { Shadows } from './shadows';
import { Space } from './space';
import { Time } from './time';
import { Transforms } from './transforms';
import { OutputVariantKey } from './types/designToken';
/**
 * Used for custom themes
 */
interface BaseTokens<Output extends OutputVariantKey = unknown> {
    borderWidths?: BorderWidths<Output>;
    colors?: Colors<Output>;
    fonts?: Fonts<Output>;
    fontSizes?: FontSizes<Output>;
    fontWeights?: FontWeights<Output>;
    lineHeights?: LineHeights<Output>;
    opacities?: Opacities<Output>;
    outlineOffsets?: OutlineOffsets<Output>;
    outlineWidths?: OutlineWidths<Output>;
    radii?: Radii<Output>;
    shadows?: Shadows<Output>;
    space?: Space<Output>;
    time?: Time<Output>;
    transforms?: Transforms<Output>;
}
export type Tokens = BaseTokens<'optional'> & {
    components?: ComponentTokens;
};
export type DefaultTokens = Required<BaseTokens<'default'>> & {
    components: DefaultComponentTokens;
};
/**
 * The fully setup theme tokens. It has the same shape as Tokens
 * but each token has added fields.
 */
export type WebTokens = Required<BaseTokens<'required'>> & {
    components: WebComponentTokens;
};
type ReactNative = 'react-native';
type BaseReactNativeTokens<Output extends OutputVariantKey = unknown> = {
    colors?: Colors<Output, ReactNative>;
    borderWidths?: BorderWidths<Output, ReactNative>;
    fontSizes?: Omit<FontSizes<Output, ReactNative>, 'xxxs' | 'xxxxl'>;
    fontWeights?: FontWeights<Output, ReactNative>;
    opacities?: Opacities<Output, ReactNative>;
    radii?: Radii<Output, ReactNative>;
    space?: Omit<Space<Output, ReactNative>, 'xxxs' | 'relative' | 'zero'>;
    time?: Time<Output, ReactNative>;
};
export type ReactNativeTokens<Output extends OutputVariantKey> = Output extends 'required' | 'default' ? Required<BaseReactNativeTokens<Output>> : BaseReactNativeTokens<Output>;
export declare const tokens: DefaultTokens;
export declare const reactNativeTokens: ReactNativeTokens<'default'>;
export {};
