import { classNames, ComponentClassName } from '@aws-amplify/ui';
import * as React from 'react';
import { View } from '../../View/View.mjs';

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconChevronLeft = (props) => {
    const { className, ...rest } = props;
    return (React.createElement(View, { as: "span", width: "1em", height: "1em", className: classNames(ComponentClassName.Icon, className), ...rest },
        React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z", fill: "currentColor" }))));
};

export { IconChevronLeft };
