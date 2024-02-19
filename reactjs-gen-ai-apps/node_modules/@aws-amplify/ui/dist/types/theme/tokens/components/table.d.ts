import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type BaseTableTokens<Output> = DesignTokenProperties<'display' | 'verticalAlign', Output>;
type TableCellTokens<Output> = DesignTokenProperties<'borderColor' | 'borderStyle' | 'borderWidth' | 'color' | 'display' | 'fontSize' | 'fontWeight' | 'padding' | 'verticalAlign', Output> & {
    large?: TableCellSizeTokens<Output>;
    small?: TableCellSizeTokens<Output>;
};
type TableCellSizeTokens<Output> = DesignTokenProperties<'fontSize' | 'padding', Output>;
type TableCaptionSizeTokens<Output> = DesignTokenProperties<'fontSize', Output>;
export type TableTokens<Output extends OutputVariantKey> = DesignTokenProperties<'borderCollapse' | 'display' | 'width', Output> & {
    head?: BaseTableTokens<Output>;
    body?: BaseTableTokens<Output>;
    foot?: BaseTableTokens<Output>;
    row?: BaseTableTokens<Output> & {
        hover?: DesignTokenProperties<'backgroundColor', Output>;
        striped?: DesignTokenProperties<'backgroundColor', Output>;
    };
    header?: TableCellTokens<Output>;
    data?: TableCellTokens<Output>;
    caption?: DesignTokenProperties<'captionSide' | 'color' | 'display' | 'fontSize' | 'textAlign' | 'wordBreak', Output> & {
        large?: TableCaptionSizeTokens<Output>;
        small?: TableCaptionSizeTokens<Output>;
    };
};
export declare const table: Required<TableTokens<'default'>>;
export {};
