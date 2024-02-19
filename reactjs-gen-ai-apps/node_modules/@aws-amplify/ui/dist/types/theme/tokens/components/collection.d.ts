import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type StateTokens<Output> = DesignTokenProperties<'backgroundColor' | 'borderColor' | 'color', Output>;
type PaginationTokens<Output> = {
    current?: DesignTokenProperties<'color' | 'backgroundColor', Output>;
    button?: DesignTokenProperties<'color', Output> & {
        _hover?: DesignTokenProperties<'backgroundColor' | 'color', Output>;
        _disabled?: DesignTokenProperties<'color', Output>;
    };
};
type SearchTokens<Output> = {
    input?: DesignTokenProperties<'color', Output>;
    button?: DesignTokenProperties<'color', Output> & {
        _active?: StateTokens<Output>;
        _disabled?: StateTokens<Output>;
        _focus?: StateTokens<Output>;
        _hover?: StateTokens<Output>;
    };
};
export interface CollectionTokens<Output extends OutputVariantKey> {
    pagination?: PaginationTokens<Output>;
    search?: SearchTokens<Output>;
}
export declare const collection: Required<CollectionTokens<'default'>>;
export {};
