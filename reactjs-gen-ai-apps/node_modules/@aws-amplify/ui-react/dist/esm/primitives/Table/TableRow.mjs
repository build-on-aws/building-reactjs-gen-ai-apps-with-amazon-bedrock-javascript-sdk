import { classNames, ComponentClassName } from '@aws-amplify/ui';
import * as React from 'react';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const TableRowPrimitive = ({ children, className, ...rest }, ref) => (React.createElement(View, { as: "tr", className: classNames(ComponentClassName.TableRow, className), ref: ref, ...rest }, children));
const TableRow = primitiveWithForwardRef(TableRowPrimitive);
TableRow.displayName = 'TableRow';

export { TableRow };
