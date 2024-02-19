import * as React from 'react';
import { Property } from 'csstype';
import { StyleToken } from '../types/style';
interface RatingMixedIconProps {
    emptyColor?: StyleToken<Property.Color>;
    emptyIcon: React.ReactNode;
    fillColor?: StyleToken<Property.Color>;
    fillIcon: React.ReactNode;
    value: number;
}
export declare const RatingMixedIcon: React.FC<RatingMixedIconProps>;
export {};
