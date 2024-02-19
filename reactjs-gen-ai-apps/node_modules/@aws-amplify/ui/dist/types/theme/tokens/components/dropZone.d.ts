import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type BaseDropZoneTokens<OutputType> = DesignTokenProperties<'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderWidth' | 'borderStyle' | 'color', OutputType>;
export type DropZoneTokens<OutputType extends OutputVariantKey> = DesignTokenProperties<'gap' | 'paddingBlock' | 'paddingInline' | 'textAlign', OutputType> & BaseDropZoneTokens<OutputType> & {
    _active?: BaseDropZoneTokens<OutputType>;
    _disabled?: BaseDropZoneTokens<OutputType>;
    accepted?: BaseDropZoneTokens<OutputType>;
    rejected?: BaseDropZoneTokens<OutputType>;
};
export declare const dropzone: Required<DropZoneTokens<'default'>>;
export {};
