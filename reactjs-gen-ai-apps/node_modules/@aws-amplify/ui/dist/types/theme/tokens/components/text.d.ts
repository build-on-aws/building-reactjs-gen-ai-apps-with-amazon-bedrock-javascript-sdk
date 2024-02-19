import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type OrderVariantKey = 'primary' | 'secondary' | 'tertiary';
type InformationVariantKey = 'info' | 'warning' | 'error' | 'success';
type BaseTextTokens<Output> = DesignTokenProperties<'color', Output>;
export type TextTokens<Output extends OutputVariantKey> = BaseTextTokens<Output> & Partial<Record<OrderVariantKey | InformationVariantKey, BaseTextTokens<Output>>>;
export declare const text: Required<TextTokens<'default'>>;
export {};
