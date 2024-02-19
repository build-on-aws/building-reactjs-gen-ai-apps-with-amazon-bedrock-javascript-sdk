import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type BannerTokens<Output> = DesignTokenProperties<'height' | 'width', Output>;
type ButtonTokens<Output> = DesignTokenProperties<'backgroundColor' | 'borderRadius' | 'color', Output>;
type DialogTokens<Output> = DesignTokenProperties<'height' | 'minHeight' | 'minWidth' | 'width', Output>;
type HeaderTokens<Output> = DesignTokenProperties<'fontSize' | 'fontWeight', Output>;
export type InAppMessagingTokens<Output extends OutputVariantKey> = {
    banner?: BannerTokens<Output>;
    button?: ButtonTokens<Output>;
    dialog?: DialogTokens<Output>;
    header?: HeaderTokens<Output>;
};
export declare const inappmessaging: Required<InAppMessagingTokens<'default'>>;
export {};
