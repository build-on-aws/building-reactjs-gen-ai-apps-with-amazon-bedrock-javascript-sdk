import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
import { TypographyTokens } from '../types/typography';
type BaseDropZoneTokens<OutputType> = DesignTokenProperties<'backgroundColor' | 'borderWidth' | 'borderStyle' | 'borderColor' | 'borderRadius', OutputType>;
export interface StorageManagerTokens<OutputType extends OutputVariantKey> {
    dropzone?: DesignTokenProperties<'gap' | 'paddingBlock' | 'paddingInline' | 'textAlign', OutputType> & BaseDropZoneTokens<OutputType> & {
        _active?: BaseDropZoneTokens<OutputType>;
        icon?: DesignTokenProperties<'fontSize' | 'color', OutputType>;
        text?: TypographyTokens<OutputType>;
    };
    file?: DesignTokenProperties<'alignItems' | 'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'gap' | 'paddingBlock' | 'paddingInline', OutputType> & {
        name?: TypographyTokens<OutputType>;
        size?: TypographyTokens<OutputType>;
        image?: DesignTokenProperties<'backgroundColor' | 'borderRadius' | 'color' | 'height' | 'width', OutputType>;
    };
    filelist?: DesignTokenProperties<'flexDirection' | 'gap'>;
    loader?: DesignTokenProperties<'strokeWidth' | 'strokeFilled' | 'strokeEmpty' | 'strokeLinecap', OutputType>;
    previewer?: DesignTokenProperties<'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'maxHeight' | 'maxWidth' | 'paddingBlock' | 'paddingInline', OutputType> & {
        text?: TypographyTokens<OutputType>;
        body?: DesignTokenProperties<'gap' | 'paddingInline' | 'paddingBlock', OutputType>;
        footer?: DesignTokenProperties<'justifyContent', OutputType>;
    };
}
export declare const storagemanager: Required<StorageManagerTokens<'default'>>;
export {};
