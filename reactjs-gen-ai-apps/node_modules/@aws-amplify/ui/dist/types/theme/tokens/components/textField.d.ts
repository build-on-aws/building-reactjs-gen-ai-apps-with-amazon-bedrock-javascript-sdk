import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type TextFieldTokens<Output extends OutputVariantKey> = DesignTokenProperties<'color' | 'borderColor' | 'fontSize', Output> & {
    _focus?: DesignTokenProperties<'borderColor', Output>;
};
export declare const textfield: Required<TextFieldTokens<'default'>>;
