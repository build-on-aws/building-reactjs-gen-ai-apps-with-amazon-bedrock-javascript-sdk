import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const TableBodyPrimitive = ({ children, className, ...rest }, ref) => (React.createElement(View, { as: "tbody", className: classNames(ComponentClassName.TableBody, className), ref: ref, ...rest }, children));
const TableBody = primitiveWithForwardRef(TableBodyPrimitive);
TableBody.displayName = 'TableBody';

export { TableBody };
