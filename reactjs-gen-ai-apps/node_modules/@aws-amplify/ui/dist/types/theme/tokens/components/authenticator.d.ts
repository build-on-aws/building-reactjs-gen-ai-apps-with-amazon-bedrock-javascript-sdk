import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type ModalTokenKey = 'width' | 'height' | 'backgroundColor' | 'top' | 'left';
type AuthenticatorModalTokens<OutputType> = DesignTokenProperties<ModalTokenKey, OutputType>;
type RouterKey = 'borderWidth' | 'borderStyle' | 'borderColor' | 'backgroundColor' | 'boxShadow';
type AuthenticatorRouterTokens<OutputType> = DesignTokenProperties<RouterKey, OutputType>;
type AuthenticatorFooterTokens<OutputType> = DesignTokenProperties<'paddingBottom', OutputType>;
type AuthenticatorFormTokens<OutputType> = DesignTokenProperties<'padding', OutputType>;
type AuthenticatorStateTokens<OutputType> = {
    inactive?: DesignTokenProperties<'backgroundColor', OutputType>;
};
type AuthenticatorOrContainerTokens<OutputType> = DesignTokenProperties<'color', OutputType> & {
    orLine?: DesignTokenProperties<'backgroundColor', OutputType>;
};
type AuthenticatorContainerToken<OutputType> = {
    widthMax?: DesignTokenProperties<'maxWidth', OutputType>['maxWidth'];
};
export type AuthenticatorTokens<OutputType extends OutputVariantKey> = DesignTokenProperties<'maxWidth', OutputType> & {
    modal?: AuthenticatorModalTokens<OutputType>;
    container?: AuthenticatorContainerToken<OutputType>;
    router?: AuthenticatorRouterTokens<OutputType>;
    footer?: AuthenticatorFooterTokens<OutputType>;
    form?: AuthenticatorFormTokens<OutputType>;
    state?: AuthenticatorStateTokens<OutputType>;
    orContainer?: AuthenticatorOrContainerTokens<OutputType>;
};
export declare const authenticator: Required<AuthenticatorTokens<'default'>>;
export {};
