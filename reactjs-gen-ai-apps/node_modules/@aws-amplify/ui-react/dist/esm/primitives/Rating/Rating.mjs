import * as React from 'react';
import { classNameModifier, ComponentClassName, classNames } from '@aws-amplify/ui';
import { Flex } from '../Flex/Flex.mjs';
import '../Icon/Icon.mjs';
import '../Icon/context/IconsContext.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import '../View/View.mjs';
import { IconStar } from '../Icon/icons/IconStar.mjs';
import { isIconFilled, isIconEmpty, isIconMixed } from './utils.mjs';
import { RatingIcon } from './RatingIcon.mjs';
import { RatingMixedIcon } from './RatingMixedIcon.mjs';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const RATING_DEFAULT_MAX_VALUE = 5;
const RATING_DEFAULT_VALUE = 0;
const RatingPrimitive = ({ className, emptyColor, emptyIcon, fillColor, icon, maxValue = RATING_DEFAULT_MAX_VALUE, size, value = RATING_DEFAULT_VALUE, ...rest }, ref) => {
    const icons = useIcons('rating');
    const filledIcon = icon ?? icons?.filled ?? React.createElement(IconStar, null);
    const _emptyIcon = emptyIcon ?? icon ?? icons?.empty ?? React.createElement(IconStar, null);
    const items = new Array(Math.ceil(maxValue)).fill(1).map((_, index) => {
        const currentIconIndex = index + 1;
        if (isIconFilled(currentIconIndex, value))
            return (React.createElement(RatingIcon, { key: index.toString(), icon: filledIcon, fill: fillColor, className: classNameModifier(ComponentClassName.RatingIcon, 'filled') }));
        if (isIconEmpty(currentIconIndex, value))
            return (React.createElement(RatingIcon, { key: index.toString(), icon: _emptyIcon, fill: emptyColor, className: classNameModifier(ComponentClassName.RatingIcon, 'empty') }));
        if (isIconMixed(currentIconIndex, value))
            return (React.createElement(RatingMixedIcon, { key: index.toString(), fillIcon: filledIcon, emptyIcon: _emptyIcon, value: value, fillColor: fillColor, emptyColor: emptyColor }));
    });
    return (React.createElement(Flex, { className: classNames(ComponentClassName.Rating, classNameModifier(ComponentClassName.Rating, size), className), ref: ref, ...rest },
        items,
        React.createElement(VisuallyHidden, null,
            value,
            " out of ",
            maxValue,
            " rating")));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/rating)
 */
const Rating = primitiveWithForwardRef(RatingPrimitive);
Rating.displayName = 'Rating';

export { Rating };
