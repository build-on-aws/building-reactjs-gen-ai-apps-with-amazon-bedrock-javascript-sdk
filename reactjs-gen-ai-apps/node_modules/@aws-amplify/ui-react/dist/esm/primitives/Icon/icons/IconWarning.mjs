import { classNames, ComponentClassName } from '@aws-amplify/ui';
import * as React from 'react';
import { View } from '../../View/View.mjs';

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconWarning = (props) => {
    const { className, ...rest } = props;
    return (React.createElement(View, { as: "span", width: "1em", height: "1em", className: classNames(ComponentClassName.Icon, className), ...rest },
        React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z", fill: "currentColor" }))));
};

export { IconWarning };
