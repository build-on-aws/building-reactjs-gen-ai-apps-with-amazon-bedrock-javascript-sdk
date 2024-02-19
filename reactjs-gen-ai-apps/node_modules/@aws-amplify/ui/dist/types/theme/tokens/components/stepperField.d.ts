import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
type ButtonStateColorTokens<Output> = DesignTokenProperties<'backgroundColor' | 'color', Output>;
export type StepperFieldTokens<Output extends OutputVariantKey> = DesignTokenProperties<'borderColor' | 'flexDirection', Output> & {
    input?: DesignTokenProperties<'textAlign' | 'color' | 'fontSize', Output>;
    button?: DesignTokenProperties<'backgroundColor' | 'color', Output> & {
        _active?: ButtonStateColorTokens<Output>;
        _focus?: ButtonStateColorTokens<Output>;
        _disabled?: ButtonStateColorTokens<Output>;
        _hover?: ButtonStateColorTokens<Output>;
    };
};
export declare const stepperfield: Required<StepperFieldTokens<'default'>>;
export {};
