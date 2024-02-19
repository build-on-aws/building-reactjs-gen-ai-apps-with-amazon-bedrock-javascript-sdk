import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type TokenKey = 'color' | 'borderColor' | 'fontSize';
export type TextAreaFieldTokens<Output extends OutputVariantKey> = DesignTokenProperties<Output extends 'default' ? Exclude<TokenKey, 'fontSize'> : TokenKey, Output> & {
    _focus?: DesignTokenProperties<'borderColor', Output>;
};
export declare const textareafield: Required<TextAreaFieldTokens<'default'>>;
export {};
