import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';

const BreadcrumbContainerPrimitive = ({ className, children, ...rest }, ref) => {
    const componentClasses = classNames(ComponentClassName.Breadcrumbs, className);
    const ariaLabel = rest['aria-label'] ?? 'Breadcrumb';
    return (React.createElement(View, { ...rest, as: "nav", "aria-label": ariaLabel, className: componentClasses, ref: ref },
        React.createElement(View, { as: "ol", className: ComponentClassName.BreadcrumbsList }, children)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/breadcrumbs)
 */
const BreadcrumbContainer = primitiveWithForwardRef(BreadcrumbContainerPrimitive);
BreadcrumbContainer.displayName = 'Breadcrumbs.Container';

export { BreadcrumbContainer };
