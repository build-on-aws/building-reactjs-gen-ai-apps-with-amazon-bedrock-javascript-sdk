import { DesignTokenValues, OpacityValue, OutputVariantKey, RecursiveDesignToken } from './types/designToken';
type OpacityScale = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
export type Opacities<Output extends OutputVariantKey = unknown, Platform = unknown> = DesignTokenValues<OpacityScale, OpacityValue<Platform, Output>, Output, Platform> & RecursiveDesignToken<OpacityValue<Platform, Output>, Output, Platform>;
export declare const opacities: Opacities<'default'>;
export {};
