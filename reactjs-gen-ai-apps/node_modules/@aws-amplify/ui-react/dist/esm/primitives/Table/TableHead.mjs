import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const TableHeadPrimitive = ({ children, className, ...rest }, ref) => (React.createElement(View, { as: "thead", className: classNames(ComponentClassName.TableHead, className), ref: ref, ...rest }, children));
const TableHead = primitiveWithForwardRef(TableHeadPrimitive);
TableHead.displayName = 'TableHead';

export { TableHead };
