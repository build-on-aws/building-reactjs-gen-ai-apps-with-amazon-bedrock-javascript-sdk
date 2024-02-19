import * as React from 'react';
import { isDesignToken } from '@aws-amplify/ui';
import { ComponentPropsToStylePropsMap } from '../types/style.mjs';
import { getValueAtCurrentBreakpoint } from './responsive/utils.mjs';
import { useBreakpoint } from './responsive/useBreakpoint.mjs';
import { useTheme } from '../../hooks/useTheme.mjs';
import { getStyleValue } from './getStyleValue.mjs';
import { isNullOrEmptyString, isEmptyString, getCSSVariableIfValueIsThemeKey } from './utils.mjs';

const isSpanPrimitiveValue = (spanValue) => {
    return (spanValue === 'auto' ||
        (typeof spanValue === 'number' && !isNaN(spanValue)) ||
        (typeof spanValue === 'string' && !isNaN(parseFloat(spanValue))));
};
const getGridSpan = (spanValue) => {
    return spanValue === 'auto' ? 'auto' : `span ${spanValue}`;
};
const convertGridSpan = (spanValue) => {
    // PropertyType
    if (isSpanPrimitiveValue(spanValue)) {
        return getGridSpan(spanValue);
    }
    // PropertyType[]
    if (Array.isArray(spanValue)) {
        return spanValue.map((value) => getGridSpan(value));
    }
    // ResponsiveObject<PropertyType>
    if (typeof spanValue === 'object' && spanValue != null) {
        return Object.entries(spanValue).reduce((acc, [key, value]) => ({ ...acc, [key]: getGridSpan(value) }), {});
    }
    return null;
};
/**
 * Transforms style props to another target prop
 * where the original is a simpler API than the target.
 * This function will remove the original prop and
 * replace target prop values with calculated
 * E.g. rowSpan => row, columnSpan => column
 */
const useTransformStyleProps = (props) => {
    const { rowSpan, columnSpan, row, column, ...rest } = props;
    const { rowFromSpanValue, columnFromSpanValue } = React.useMemo(() => {
        return {
            rowFromSpanValue: convertGridSpan(rowSpan),
            columnFromSpanValue: convertGridSpan(columnSpan),
        };
    }, [rowSpan, columnSpan]);
    return {
        row: !isNullOrEmptyString(row) ? row : rowFromSpanValue,
        column: !isNullOrEmptyString(column) ? column : columnFromSpanValue,
        ...rest,
    };
};
const isComponentStyleProp = (key) => {
    return key in ComponentPropsToStylePropsMap;
};
/**
 * Convert style props to CSS variables for React style prop
 * Note: Will filter out undefined, null, and empty string prop values
 */
const convertStylePropsToStyleObj = ({ props = {}, style = {}, breakpoint, breakpoints, tokens, }) => {
    const nonStyleProps = {};
    Object.keys(props)
        .filter((propKey) => props[propKey] !== null)
        .forEach((propKey) => {
        if (isComponentStyleProp(propKey)) {
            const values = props[propKey];
            if (!values || isEmptyString(values))
                return;
            const reactStyleProp = ComponentPropsToStylePropsMap[propKey];
            // short circuit the style prop here if it is a string or design token
            // so we don't have to call getValueAtCurrentBreakpoint every time
            let value = '';
            if (isDesignToken(values)) {
                value = values.toString();
            }
            else if (typeof values === 'string') {
                value = getCSSVariableIfValueIsThemeKey(propKey, values, tokens);
            }
            else if (typeof values === 'number') {
                value = values;
            }
            else if (typeof values === 'object') {
                // here values should be a responsive array or object
                value = getStyleValue({
                    propKey,
                    tokens,
                    value: getValueAtCurrentBreakpoint({
                        values,
                        breakpoint,
                        breakpoints,
                    }),
                });
            }
            style = {
                ...style,
                [reactStyleProp]: value,
            };
        }
        else if (typeof props[propKey] !== 'undefined') {
            nonStyleProps[propKey] = props[propKey];
        }
    });
    return { propStyles: style, nonStyleProps };
};
const useStyles = (props, style) => {
    const { breakpoints: { values: breakpoints, defaultBreakpoint }, tokens, } = useTheme();
    const breakpoint = useBreakpoint({
        breakpoints,
        defaultBreakpoint,
    });
    const propStyles = useTransformStyleProps(props);
    return React.useMemo(() => convertStylePropsToStyleObj({
        props: propStyles,
        style,
        breakpoint,
        breakpoints,
        tokens,
    }), [propStyles, style, breakpoints, breakpoint, tokens]);
};

export { convertGridSpan, convertStylePropsToStyleObj, getGridSpan, isSpanPrimitiveValue, useStyles, useTransformStyleProps };
