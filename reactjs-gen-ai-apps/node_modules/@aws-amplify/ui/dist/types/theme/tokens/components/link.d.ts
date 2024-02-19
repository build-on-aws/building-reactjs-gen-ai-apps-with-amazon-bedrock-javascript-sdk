import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type LinkState = 'active' | 'focus' | 'hover' | 'visited';
export type LinkTokens<Output extends OutputVariantKey> = DesignTokenProperties<'color', Output> & Partial<Record<LinkState, DesignTokenProperties<'color', Output>>>;
export declare const link: Required<LinkTokens<'default'>>;
export {};
