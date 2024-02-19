import { DesignTokenValues, OutputVariantKey, SpaceValue, RecursiveDesignToken } from './types/designToken';
type SpaceSize = 'xxxs' | 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'xxxl';
export type SpaceSizes<Output extends OutputVariantKey = unknown, Platform = unknown> = DesignTokenValues<SpaceSize | 'zero', SpaceValue<Platform>, Output, Platform>;
type BaseSpace<Output extends OutputVariantKey = unknown, Platform = unknown> = SpaceSizes<Output, Platform> & {
    relative?: DesignTokenValues<SpaceSize | 'full', SpaceValue, Output, Platform>;
};
export type Space<Output extends OutputVariantKey = unknown, Platform = unknown> = (Output extends 'required' | 'default' ? Required<BaseSpace<Output, Platform>> : BaseSpace<Output, Platform>) & RecursiveDesignToken<SpaceValue<Platform, Output>, Output, Platform>;
export declare const space: Space<'default'>;
export {};
