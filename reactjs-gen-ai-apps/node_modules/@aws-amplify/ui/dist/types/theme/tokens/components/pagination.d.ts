import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type PaginationTokens<Output extends OutputVariantKey> = {
    current?: DesignTokenProperties<'alignItems' | 'backgroundColor' | 'color' | 'fontSize' | 'justifyContent', Output>;
    button?: DesignTokenProperties<'color' | 'paddingInlineEnd' | 'paddingInlineStart' | 'transitionDuration' | 'transitionProperty', Output> & {
        hover?: DesignTokenProperties<'backgroundColor' | 'color', Output>;
        disabled?: DesignTokenProperties<'color', Output>;
    };
    ellipsis?: DesignTokenProperties<'alignItems' | 'justifyContent' | 'paddingInlineEnd' | 'paddingInlineStart', Output>;
    itemContainer?: DesignTokenProperties<'marginLeft' | 'marginRight', Output>;
    itemShared?: DesignTokenProperties<'borderRadius' | 'height' | 'minWidth', Output>;
};
export declare const pagination: Required<PaginationTokens<'default'>>;
