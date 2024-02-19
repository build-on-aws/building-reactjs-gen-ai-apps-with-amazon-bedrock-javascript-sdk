import * as React from 'react';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { BreadcrumbItem } from './BreadcrumbItem.mjs';
import { BreadcrumbLink } from './BreadcrumbLink.mjs';
import { BreadcrumbSeparator } from './BreadcrumbSeparator.mjs';
import { BreadcrumbContainer } from './BreadcrumbContainer.mjs';

const BreadcrumbsPrimitive = ({ className, items, separator = React.createElement(BreadcrumbSeparator, null), ...rest }, ref) => {
    const ariaLabel = rest['aria-label'] ?? 'Breadcrumb';
    return (React.createElement(BreadcrumbContainer, { ...rest, "aria-label": ariaLabel, className: className, ref: ref }, items?.map(({ href, label }, idx) => {
        const isCurrent = items.length - 1 === idx;
        return (React.createElement(BreadcrumbItem, { key: `${href}${idx}` },
            React.createElement(BreadcrumbLink, { href: href, isCurrent: isCurrent }, label),
            isCurrent ? null : separator));
    })));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/breadcrumbs)
 */
const Breadcrumbs = Object.assign(primitiveWithForwardRef(BreadcrumbsPrimitive), {
    Item: BreadcrumbItem,
    Link: BreadcrumbLink,
    Separator: BreadcrumbSeparator,
    Container: BreadcrumbContainer,
});
Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs };
