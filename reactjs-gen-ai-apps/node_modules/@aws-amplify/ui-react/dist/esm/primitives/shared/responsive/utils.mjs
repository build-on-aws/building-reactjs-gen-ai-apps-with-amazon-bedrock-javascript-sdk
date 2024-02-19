import { defaultTheme } from '@aws-amplify/ui';
import { objectKeys } from '../utils.mjs';

const getClosestValueByBreakpoint = ({ breakpoint, breakpoints, values, }) => {
    const value = values[breakpoint];
    // Check if breakpoint exists in values
    if (value !== undefined) {
        return value;
    }
    // Otherwise use a lower breakpoint value
    const breakpointsDesc = objectKeys(breakpoints).sort((a, b) => breakpoints[b] - breakpoints[a]);
    const lowerBreakpoints = breakpointsDesc.slice(breakpointsDesc.indexOf(breakpoint));
    for (const breakpoint of lowerBreakpoints) {
        // Check if breakpoint exists in values
        const value = values[breakpoint];
        if (value !== undefined) {
            return value;
        }
    }
    return null;
};
/**
 * This takes an object and will return an object that only has the
 * breakpoint keys
 * @param obj
 * @returns
 */
const valueObjToBreakpoints = (obj) => {
    return objectKeys(obj).reduce((acc, key) => key in defaultTheme.breakpoints.values
        ? { ...acc, [key]: obj[key] }
        : acc, {});
};
const getValueAtCurrentBreakpoint = ({ breakpoint, breakpoints, values, }) => {
    let breakpointCompatValues = {};
    const breakpointsAscending = objectKeys(breakpoints).sort((a, b) => breakpoints[a] - breakpoints[b]);
    if (Array.isArray(values)) {
        values.forEach((value, index) => {
            breakpointCompatValues[breakpointsAscending[index]] = value;
        });
    }
    else if (typeof values === 'object') {
        breakpointCompatValues = valueObjToBreakpoints(values);
    }
    return getClosestValueByBreakpoint({
        breakpoint,
        breakpoints,
        values: breakpointCompatValues,
    });
};

export { getValueAtCurrentBreakpoint };
