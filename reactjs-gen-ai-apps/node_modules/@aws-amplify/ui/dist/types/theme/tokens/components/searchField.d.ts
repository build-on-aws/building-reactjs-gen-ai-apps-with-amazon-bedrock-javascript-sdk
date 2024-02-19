import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type StateTokens<Output> = DesignTokenProperties<'backgroundColor' | 'borderColor' | 'color', Output>;
type SearchTokens<Output> = DesignTokenProperties<'backgroundColor' | 'color'> & {
    _active?: StateTokens<Output>;
    _disabled?: StateTokens<Output>;
    _focus?: StateTokens<Output>;
    _hover?: StateTokens<Output>;
};
export type SearchFieldTokens<Output extends OutputVariantKey> = DesignTokenProperties<'color', Output> & {
    button?: SearchTokens<Output>;
};
export declare const searchfield: Required<SearchFieldTokens<'default'>>;
export {};
