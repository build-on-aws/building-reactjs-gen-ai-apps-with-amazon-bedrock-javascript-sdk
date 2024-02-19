import { DesignTokenValues, OutputVariantKey, TransformValue } from './types/designToken';
type TransformSize = 'small' | 'medium' | 'large';
export type BaseTransforms<Output extends OutputVariantKey = unknown, Platform = unknown> = {
    slideX?: DesignTokenValues<TransformSize, TransformValue, Output, Platform>;
};
export type Transforms<Output extends OutputVariantKey = unknown, Platform = unknown> = Output extends 'required' | 'default' ? Required<BaseTransforms<Output, Platform>> : BaseTransforms<Output, Platform>;
export declare const transforms: Transforms<'default'>;
export {};
