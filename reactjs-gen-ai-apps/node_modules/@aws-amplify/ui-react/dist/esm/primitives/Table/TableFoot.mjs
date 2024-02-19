import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const TableFootPrimitive = ({ children, className, ...rest }, ref) => (React.createElement(View, { as: "tfoot", className: classNames(ComponentClassName.TableFoot, className), ref: ref, ...rest }, children));
const TableFoot = primitiveWithForwardRef(TableFootPrimitive);
TableFoot.displayName = 'TableFoot';

export { TableFoot };
