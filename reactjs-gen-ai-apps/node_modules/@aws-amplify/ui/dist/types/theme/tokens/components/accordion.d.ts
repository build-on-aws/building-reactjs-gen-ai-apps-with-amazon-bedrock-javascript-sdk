import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type AccordionTokens<Output extends OutputVariantKey> = DesignTokenProperties<'backgroundColor', Output> & {
    item?: DesignTokenProperties<'borderWidth' | 'borderStyle' | 'borderColor' | 'borderRadius', Output> & {
        icon?: DesignTokenProperties<'transitionDuration' | 'transitionTimingFunction' | 'color', Output>;
        content?: DesignTokenProperties<'color' | 'paddingInline' | 'paddingBlockEnd' | 'paddingBlockStart', Output>;
        trigger?: DesignTokenProperties<'alignItems' | 'backgroundColor' | 'color' | 'gap' | 'justifyContent' | 'paddingBlock' | 'paddingInline', Output> & {
            _hover?: DesignTokenProperties<'backgroundColor' | 'color', Output>;
            _focus?: DesignTokenProperties<'boxShadow' | 'borderColor', Output>;
        };
    };
};
export declare const accordion: Required<AccordionTokens<'default'>>;
