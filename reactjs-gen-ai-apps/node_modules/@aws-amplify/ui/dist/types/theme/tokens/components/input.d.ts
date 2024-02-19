import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type InputTokens<Output extends OutputVariantKey> = DesignTokenProperties<'color' | 'borderColor' | 'fontSize', Output> & {
    _focus?: DesignTokenProperties<'borderColor', Output>;
};
export declare const input: Required<InputTokens<'default'>>;
