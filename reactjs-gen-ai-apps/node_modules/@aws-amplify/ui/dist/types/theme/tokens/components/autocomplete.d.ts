import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type AutocompleteTokens<OutputType extends OutputVariantKey> = {
    menu?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'marginBlockStart' | 'width', OutputType> & {
        options?: DesignTokenProperties<'display' | 'flexDirection' | 'maxHeight', OutputType>;
        option?: DesignTokenProperties<'backgroundColor' | 'color' | 'cursor' | 'transitionDuration' | 'transitionProperty' | 'transitionTimingFunction', OutputType> & {
            _active?: DesignTokenProperties<'backgroundColor' | 'color', OutputType>;
        };
        _empty?: DesignTokenProperties<'display', OutputType>;
        _loading?: DesignTokenProperties<'alignItems' | 'display' | 'gap', OutputType>;
        spaceShared?: DesignTokenProperties<'paddingBlock' | 'paddingInline', OutputType>;
    };
};
export declare const autocomplete: Required<AutocompleteTokens<'default'>>;
