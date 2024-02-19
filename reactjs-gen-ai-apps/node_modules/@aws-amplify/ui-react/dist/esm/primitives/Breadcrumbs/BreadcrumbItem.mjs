import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';

const BreadcrumbItemPrimitive = ({ className, children, as = 'li', ...rest }, ref) => {
    const componentClasses = classNames(ComponentClassName.BreadcrumbsItem, className);
    return (React.createElement(View, { ...rest, as: as, className: componentClasses, ref: ref }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/breadcrumbs)
 */
const BreadcrumbItem = primitiveWithForwardRef(BreadcrumbItemPrimitive);
BreadcrumbItem.displayName = 'Breadcrumbs.Item';

export { BreadcrumbItem };
