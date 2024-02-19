import { isDesignToken, cssNameTransform } from '@aws-amplify/ui';
export { classNameModifier, classNameModifierByFlag } from '@aws-amplify/ui';
import { isThemeStylePropKey } from '../types/theme.mjs';
import { stylePropsToThemeKeys } from './constants.mjs';

const strHasLength = (str) => typeof str === 'string' && str.length > 0;
const isEmptyString = (value) => typeof value === 'string' && value.length === 0;
const isNullOrEmptyString = (value) => value == null || isEmptyString(value);
/**
 * Create a consecutive integer array from start value to end value.
 * @param start start value
 * @param end end value
 * @returns an integer array with elements from start to end consecutively
 */
const getConsecutiveIntArray = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};
/**
 * TS helper function to make using Object.keys more typesafe
 */
const objectKeys = (obj) => {
    return Object.keys(obj);
};
const getCSSVariableIfValueIsThemeKey = (propKey, value, tokens) => {
    if (typeof value !== 'string') {
        return value;
    }
    // For shorthand properties like `padding` which can accept 1, 2, 3, or 4 values
    // run this function on each value. This would not work on CSS shorthands that
    // mix types, like border which is a composite of borderWidth, borderStyle, and
    // borderColor.
    if (value.includes(' ')) {
        return value
            .split(' ')
            .map((val) => getCSSVariableIfValueIsThemeKey(propKey, val, tokens))
            .join(' ');
    }
    if (isThemeStylePropKey(propKey)) {
        const path = value.split('.');
        const tokenKey = stylePropsToThemeKeys[propKey];
        let tokenProps = tokens[tokenKey];
        for (let i = 0; i < path.length; i++) {
            if (tokenProps) {
                // overwrite tokenProps with next nested value of tokenProps
                tokenProps = tokenProps[path[i]];
                continue;
            }
            break;
        }
        return isDesignToken(tokenProps)
            ? `var(--${cssNameTransform({
                path: [stylePropsToThemeKeys[propKey], ...path],
            })})`
            : value;
    }
    return value;
};

export { getCSSVariableIfValueIsThemeKey, getConsecutiveIntArray, isEmptyString, isNullOrEmptyString, objectKeys, strHasLength };
