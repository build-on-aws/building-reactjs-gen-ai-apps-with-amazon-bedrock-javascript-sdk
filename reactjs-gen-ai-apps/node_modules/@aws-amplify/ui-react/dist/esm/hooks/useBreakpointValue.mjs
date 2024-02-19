import { getValueAtCurrentBreakpoint } from '../primitives/shared/responsive/utils.mjs';
import { useBreakpoint } from '../primitives/shared/responsive/useBreakpoint.mjs';
import { useTheme } from './useTheme.mjs';
import { getStyleValue } from '../primitives/shared/getStyleValue.mjs';
import { isDesignToken, isString } from '@aws-amplify/ui';

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/theming/responsive#usebreakpointvalue)
 */
const useBreakpointValue = (values, defaultBreakpoint = 'base', propKey) => {
    const { breakpoints: { values: breakpoints }, tokens, } = useTheme();
    const breakpoint = useBreakpoint({
        breakpoints,
        defaultBreakpoint,
    });
    const value = getValueAtCurrentBreakpoint({
        breakpoint,
        breakpoints,
        values,
    });
    if (isDesignToken(value) || isString(value)) {
        return getStyleValue({ value, propKey, tokens });
    }
    else {
        return value;
    }
};

export { useBreakpointValue };
