import * as React from 'react';
import { WebTheme } from '@aws-amplify/ui';
import { GridItemStyleProps, GridSpanType, BaseViewProps } from '../types';
import { Breakpoint, Breakpoints } from '../types/responsive';
export declare const isSpanPrimitiveValue: (spanValue: GridItemStyleProps['rowSpan' | 'columnSpan']) => spanValue is GridSpanType;
export declare const getGridSpan: (spanValue: GridSpanType) => string;
export declare const convertGridSpan: (spanValue?: GridItemStyleProps['rowSpan' | 'columnSpan']) => GridItemStyleProps['row'] | GridItemStyleProps['column'] | null;
interface UseTransformStyleProps extends Record<string, any> {
    row?: GridItemStyleProps['row'];
    column?: GridItemStyleProps['column'];
    rowSpan?: GridItemStyleProps['rowSpan'];
    columnSpan?: GridItemStyleProps['columnSpan'];
}
/**
 * Transforms style props to another target prop
 * where the original is a simpler API than the target.
 * This function will remove the original prop and
 * replace target prop values with calculated
 * E.g. rowSpan => row, columnSpan => column
 */
export declare const useTransformStyleProps: (props: UseTransformStyleProps) => Record<string, any>;
interface ConvertStylePropsToStyleObjParams {
    props: Record<string, unknown>;
    style?: React.CSSProperties;
    breakpoint: Breakpoint;
    breakpoints: Breakpoints;
    tokens: WebTheme['tokens'];
}
export interface ConvertStylePropsToStyleObj {
    (params: ConvertStylePropsToStyleObjParams): {
        propStyles: React.CSSProperties;
        nonStyleProps: Partial<BaseViewProps>;
    };
}
/**
 * Convert style props to CSS variables for React style prop
 * Note: Will filter out undefined, null, and empty string prop values
 */
export declare const convertStylePropsToStyleObj: ConvertStylePropsToStyleObj;
export declare const useStyles: (props: Record<string, unknown>, style?: React.CSSProperties) => {
    propStyles: React.CSSProperties;
    nonStyleProps: Partial<BaseViewProps>;
};
export {};
