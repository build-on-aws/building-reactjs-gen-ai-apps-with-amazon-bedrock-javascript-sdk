import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const TablePrimitive = ({ caption, children, className, highlightOnHover = false, size, variation, ...rest }, ref) => {
    const componentClasses = classNames(ComponentClassName.Table, classNameModifier(ComponentClassName.Table, size), classNameModifier(ComponentClassName.Table, variation), className);
    return (React.createElement(View, { as: "table", className: componentClasses, "data-highlightonhover": highlightOnHover, ref: ref, ...rest },
        caption && (React.createElement(View, { as: "caption", className: ComponentClassName.TableCaption }, caption)),
        children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/table)
 */
const Table = primitiveWithForwardRef(TablePrimitive);
Table.displayName = 'Table';

export { Table };
