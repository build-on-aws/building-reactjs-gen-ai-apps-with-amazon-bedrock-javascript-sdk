import { borderWidths } from './borderWidths.mjs';
import { colors } from './colors.mjs';
import { components } from './components/index.mjs';
import { fonts } from './fonts.mjs';
import { fontSizes } from './fontSizes.mjs';
import { fontWeights } from './fontWeights.mjs';
import { lineHeights } from './lineHeights.mjs';
import { opacities } from './opacities.mjs';
import { outlineOffsets } from './outlineOffsets.mjs';
import { outlineWidths } from './outlineWidths.mjs';
import { radii } from './radii.mjs';
import { shadows } from './shadows.mjs';
import { space } from './space.mjs';
import { time } from './time.mjs';
import { transforms } from './transforms.mjs';

const tokens = {
    components,
    borderWidths,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    opacities,
    outlineOffsets,
    outlineWidths,
    radii,
    shadows,
    space,
    time,
    transforms,
};
const reactNativeTokens = {
    colors,
    borderWidths,
    fontSizes: {
        xxs: fontSizes.xxs,
        xs: fontSizes.xs,
        small: fontSizes.small,
        medium: fontSizes.medium,
        large: fontSizes.large,
        xl: fontSizes.xl,
        xxl: fontSizes.xxl,
        xxxl: fontSizes.xxxl,
    },
    fontWeights,
    opacities,
    // React Native doesn't need the relative space values
    space: {
        // use `space.xxxs` to output a value of `2` and avoid odd space numbers
        xxs: space.xxxs,
        xs: space.xs,
        small: space.small,
        medium: space.medium,
        large: space.large,
        xl: space.xl,
        xxl: space.xxl,
        xxxl: space.xxxl,
    },
    radii,
    time,
};

export { reactNativeTokens, tokens };
