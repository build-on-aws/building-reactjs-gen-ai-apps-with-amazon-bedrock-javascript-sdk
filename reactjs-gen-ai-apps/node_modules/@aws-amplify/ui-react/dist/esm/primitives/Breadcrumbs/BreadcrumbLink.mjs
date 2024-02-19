import * as React from 'react';
import { classNames, ComponentClassName, classNameModifierByFlag } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { Link } from '../Link/Link.mjs';
import { Text } from '../Text/Text.mjs';

const BreadcrumbLinkPrimitive = ({ className, children, href, isCurrent, ...rest }, ref) => {
    const componentClasses = classNames(ComponentClassName.BreadcrumbsLink, classNameModifierByFlag(ComponentClassName.BreadcrumbsLink, 'current', isCurrent), className);
    if (isCurrent) {
        const ariaCurrent = rest['aria-current'] ?? 'page';
        const as = rest.as ?? 'span';
        return (React.createElement(Text, { ...rest, as: as, "aria-current": ariaCurrent, className: componentClasses, ref: ref }, children));
    }
    else {
        return (React.createElement(Link, { ...rest, className: componentClasses, ref: ref, href: href }, children));
    }
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/breadcrumbs)
 */
const BreadcrumbLink = primitiveWithForwardRef(BreadcrumbLinkPrimitive);
BreadcrumbLink.displayName = 'Breadcrumbs.Link';

export { BreadcrumbLink };
