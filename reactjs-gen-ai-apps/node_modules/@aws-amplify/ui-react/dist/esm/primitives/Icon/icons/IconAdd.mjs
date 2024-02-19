import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../../View/View.mjs';

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconAdd = (props) => {
    const { className, ...rest } = props;
    return (React.createElement(View, { as: "span", width: "1em", height: "1em", className: classNames(ComponentClassName.Icon, className), ...rest },
        React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z", fill: "currentColor" }))));
};

export { IconAdd };
