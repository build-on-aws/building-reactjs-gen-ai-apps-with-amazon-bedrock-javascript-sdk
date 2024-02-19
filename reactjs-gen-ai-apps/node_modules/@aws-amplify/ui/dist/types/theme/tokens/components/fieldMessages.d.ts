import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type FieldMessagesTokens<Output extends OutputVariantKey> = {
    error?: DesignTokenProperties<'color' | 'fontSize', Output>;
    description?: DesignTokenProperties<'color' | 'fontSize' | 'fontStyle', Output>;
};
export declare const fieldmessages: Required<FieldMessagesTokens<'default'>>;
