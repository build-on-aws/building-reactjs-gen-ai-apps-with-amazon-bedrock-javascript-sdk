import { useTheme } from './useTheme.mjs';
import { useBreakpoint } from '../primitives/shared/responsive/useBreakpoint.mjs';

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 *
 * Hook to get the current breakpoint of the provided theme.
 * @returns {Breakpoint}
 */
const useThemeBreakpoint = () => {
    const { breakpoints: { values: breakpoints, defaultBreakpoint }, } = useTheme();
    const breakpoint = useBreakpoint({
        breakpoints,
        defaultBreakpoint,
    });
    return breakpoint;
};

export { useThemeBreakpoint };
