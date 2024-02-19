import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import '../Icon/Icon.mjs';
import '../Icon/context/IconsContext.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import { View } from '../View/View.mjs';
import { IconExpandMore } from '../Icon/icons/IconExpandMore.mjs';

const AccordionIconPrimitive = ({ className, as = 'span', ...rest }, ref) => {
    const icons = useIcons('accordion');
    return (React.createElement(View, { ...rest, ref: ref, as: as, className: classNames(ComponentClassName.AccordionItemIcon, className), "aria-hidden": "true" }, icons?.more ?? React.createElement(IconExpandMore, null)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/accordion)
 */
const AccordionIcon = primitiveWithForwardRef(AccordionIconPrimitive);
AccordionIcon.displayName = 'Accordion.Icon';

export { AccordionIcon };
