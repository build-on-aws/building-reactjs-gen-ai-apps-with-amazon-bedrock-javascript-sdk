import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const LinkPrimitive = ({ as = 'a', children, className, isExternal, ...rest }, ref) => {
    return (React.createElement(View, { as: as, className: classNames(ComponentClassName.Link, className), ref: ref, rel: isExternal ? 'noopener noreferrer' : undefined, target: isExternal ? '_blank' : undefined, ...rest }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/link)
 */
const Link = primitiveWithForwardRef(LinkPrimitive);
Link.displayName = 'Link';

export { Link };
