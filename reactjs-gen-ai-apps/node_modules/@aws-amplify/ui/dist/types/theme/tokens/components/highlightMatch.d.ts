import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type HighlightMatchTokens<OutputType extends OutputVariantKey> = {
    highlighted?: DesignTokenProperties<'fontWeight', OutputType>;
};
export declare const highlightmatch: Required<HighlightMatchTokens<'default'>>;
