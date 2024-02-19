import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type BreadcrumbsTokens<OutputType extends OutputVariantKey> = DesignTokenProperties<'gap' | 'flexDirection' | 'flexWrap' | 'color', OutputType> & {
    item?: DesignTokenProperties<'color' | 'fontSize' | 'alignItems' | 'lineHeight' | 'flexDirection', OutputType>;
    separator?: DesignTokenProperties<'color' | 'fontSize' | 'paddingInline', OutputType>;
    link?: DesignTokenProperties<'color' | 'fontSize' | 'fontWeight' | 'paddingInline' | 'paddingBlock' | 'textDecoration', OutputType> & {
        current?: DesignTokenProperties<'color' | 'fontSize' | 'fontWeight' | 'textDecoration', OutputType>;
    };
};
export declare const breadcrumbs: Required<BreadcrumbsTokens<'default'>>;
