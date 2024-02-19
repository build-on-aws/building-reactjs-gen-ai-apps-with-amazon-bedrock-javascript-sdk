import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type CopyTokens<Output extends OutputVariantKey> = DesignTokenProperties<'fontSize' | 'gap', Output> & {
    svg?: {
        path?: DesignTokenProperties<'fill', Output>;
    };
    toolTip?: DesignTokenProperties<'bottom' | 'color' | 'fontSize', Output>;
};
export declare const copy: Required<CopyTokens<'default'>>;
