import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';

const BreadcrumbSeparatorPrimitive = ({ className, children = '/', as = 'span', ...rest }, ref) => {
    const ariaHidden = rest['aria-hidden'] ?? 'true';
    return (React.createElement(View, { ...rest, as: as, ref: ref, "aria-hidden": ariaHidden, className: classNames(ComponentClassName.BreadcrumbsSeparator, className) }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/breadcrumbs)
 */
const BreadcrumbSeparator = primitiveWithForwardRef(BreadcrumbSeparatorPrimitive);
BreadcrumbSeparator.displayName = 'Breadcrumbs.Separator';

export { BreadcrumbSeparator };
