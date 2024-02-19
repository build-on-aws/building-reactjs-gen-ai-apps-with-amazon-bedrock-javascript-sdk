import * as React from 'react';
import { Property } from 'csstype';
import { StyleToken } from '../types/style';
interface RatingIconProps {
    icon: React.ReactNode;
    fill?: StyleToken<Property.Color>;
    className: string;
}
export declare const RatingIcon: React.FC<RatingIconProps>;
export {};
