import { classNames, ComponentClassName } from '@aws-amplify/ui';
import * as React from 'react';
import { View } from '../../View/View.mjs';

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconClose = (props) => {
    const { className, size, ...rest } = props;
    return (React.createElement(View, { as: "span", width: size ?? '1em', height: size ?? '1em', className: classNames(ComponentClassName.Icon, className), ...rest },
        React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: size ? { width: size, height: size } : undefined },
            React.createElement("path", { d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z", fill: "currentColor" }))));
};

export { IconClose };
