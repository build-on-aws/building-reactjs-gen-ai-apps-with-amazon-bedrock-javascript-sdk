import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier, classNameModifierByFlag } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const LINEAR_EMPTY = 'linear-empty';
const LINEAR_FILLED = 'linear-filled';
const CIRCULAR_EMPTY = 'circular-empty';
const CIRCULAR_FILLED = 'circular-filled';
// radius + strokeWidth = 50
const CIRCULAR_STROKE_WIDTH = 8;
const RADIUS = 42;
// circumference = 2 * r * PI  (r = 42)
const CIRCUMFERENCE = 2 * RADIUS * Math.PI;
const LoaderPrimitive = ({ className, filledColor, emptyColor, size, variation, isDeterminate = false, isPercentageTextHidden = false, percentage = 0, ...rest }, ref) => {
    percentage = Math.min(percentage, 100);
    percentage = Math.max(percentage, 0);
    const percent = `${percentage}%`;
    const componentClasses = classNames(ComponentClassName.Loader, classNameModifier(ComponentClassName.Loader, size), classNameModifier(ComponentClassName.Loader, variation), classNameModifierByFlag(ComponentClassName.Loader, 'determinate', isDeterminate), className);
    const linearLoader = (React.createElement("g", null,
        React.createElement("line", { x1: "0", x2: "100%", y1: "50%", y2: "50%", style: { stroke: String(emptyColor) }, "data-testid": LINEAR_EMPTY }),
        React.createElement("line", { x1: "0", x2: isDeterminate ? percent : '100%', y1: "50%", y2: "50%", style: {
                // To get rid of the visible stroke linecap when percentage is 0
                stroke: isDeterminate && percentage === 0
                    ? 'none'
                    : filledColor
                        ? String(filledColor)
                        : undefined,
            }, "data-testid": LINEAR_FILLED }),
        isDeterminate ? (React.createElement("text", { "aria-live": "polite", className: classNames(ComponentClassName.LoaderLabel, isPercentageTextHidden ? ComponentClassName.VisuallyHidden : null), 
            // -1% offset makes the text position look nicest
            x: `${-1 + percentage}%`, y: "200%" }, percent)) : null));
    // r + stroke-width should add up to 50% to avoid overflow
    const circularLoader = (React.createElement("g", null,
        React.createElement("circle", { cx: "50%", cy: "50%", r: `${RADIUS}%`, strokeWidth: `${CIRCULAR_STROKE_WIDTH}%`, style: { stroke: String(emptyColor) }, "data-testid": CIRCULAR_EMPTY }),
        React.createElement("circle", { cx: "50%", cy: "50%", r: `${RADIUS}%`, strokeWidth: `${CIRCULAR_STROKE_WIDTH}%`, style: {
                stroke: String(filledColor),
                strokeDasharray: isDeterminate
                    ? `${CIRCUMFERENCE}% ${CIRCUMFERENCE}%`
                    : undefined,
                strokeDashoffset: isDeterminate
                    ? `${CIRCUMFERENCE - (CIRCUMFERENCE * percentage) / 100}%`
                    : undefined,
            }, "data-testid": CIRCULAR_FILLED }),
        isDeterminate ? (React.createElement("text", { "aria-live": "polite", className: classNames(ComponentClassName.LoaderLabel, isPercentageTextHidden ? ComponentClassName.VisuallyHidden : null), 
            // this x and y make text position look nicest
            x: "130%", y: "80%" }, percent)) : null));
    return (React.createElement(View, { as: "svg", className: componentClasses, ref: ref, role: "img", ...rest }, variation === 'linear' ? linearLoader : circularLoader));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/loader)
 */
const Loader = primitiveWithForwardRef(LoaderPrimitive);
Loader.displayName = 'Loader';

export { CIRCULAR_EMPTY, CIRCULAR_FILLED, CIRCULAR_STROKE_WIDTH, CIRCUMFERENCE, LINEAR_EMPTY, LINEAR_FILLED, Loader, RADIUS };
