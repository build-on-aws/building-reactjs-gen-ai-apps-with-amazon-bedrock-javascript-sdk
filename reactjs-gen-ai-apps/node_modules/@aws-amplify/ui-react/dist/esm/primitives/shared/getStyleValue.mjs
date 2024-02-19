import { isDesignToken, isString } from '@aws-amplify/ui';
import { getCSSVariableIfValueIsThemeKey } from './utils.mjs';

/**
 * This takes an unknown value, which could be a:
 * - design token: `color={tokens.colors.font.primary}`
 * - string, which could be a:
 *   - theme key: `color='font.primary'`
 *   - plain style: `color='red'`
 * - or a number: `padding={10}`
 * and returns the appropriate and resolved value
 */
const getStyleValue = ({ value, propKey, tokens, }) => {
    if (isDesignToken(value)) {
        return value.toString();
    }
    if (isString(value)) {
        return isString(propKey)
            ? getCSSVariableIfValueIsThemeKey(propKey, value, tokens)
            : value;
    }
    return null;
};

export { getStyleValue };
