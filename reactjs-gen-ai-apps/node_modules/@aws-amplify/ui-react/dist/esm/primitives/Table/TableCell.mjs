import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const TableCellPrimitive = ({ as: asElementTag = 'td', children, className, ...rest }, ref) => (React.createElement(View, { as: asElementTag, className: classNames(asElementTag === 'td'
        ? ComponentClassName.TableTd
        : ComponentClassName.TableTh, className), ref: ref, ...rest }, children));
const TableCell = primitiveWithForwardRef(TableCellPrimitive);
TableCell.displayName = 'TableCell';

export { TableCell };
