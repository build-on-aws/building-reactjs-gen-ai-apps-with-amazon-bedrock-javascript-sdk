import * as React from 'react';
import { ComponentClassName, classNames, classNameModifier } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';

const RatingMixedIcon = ({ emptyColor, emptyIcon, fillColor, fillIcon, value, }) => {
    const widthPercentage = `${(value % 1) * 100}%`;
    return (React.createElement(View, { as: "span", className: ComponentClassName.RatingItem, "aria-hidden": "true" },
        React.createElement(View, { as: "span", className: classNames(ComponentClassName.RatingIcon, classNameModifier(ComponentClassName.RatingIcon, 'empty')), color: emptyColor }, emptyIcon),
        React.createElement(View, { as: "span", className: classNames(ComponentClassName.RatingIcon, classNameModifier(ComponentClassName.RatingIcon, 'filled')), width: widthPercentage, color: fillColor }, fillIcon)));
};
RatingMixedIcon.displayName = 'RatingMixedIcon';

export { RatingMixedIcon };
