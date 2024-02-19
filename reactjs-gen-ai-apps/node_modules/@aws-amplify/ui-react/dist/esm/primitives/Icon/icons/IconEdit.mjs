import { classNames, ComponentClassName } from '@aws-amplify/ui';
import * as React from 'react';
import { View } from '../../View/View.mjs';

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const IconEdit = (props) => {
    const { className, ...rest } = props;
    return (React.createElement(View, { as: "span", width: "1em", height: "1em", className: classNames(ComponentClassName.Icon, className), ...rest },
        React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92l9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34z", fill: "currentColor" }))));
};

export { IconEdit };
