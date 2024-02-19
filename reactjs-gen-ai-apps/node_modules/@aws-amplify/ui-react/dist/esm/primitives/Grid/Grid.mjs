import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const GridPrimitive = ({ className, children, ...rest }, ref) => (React.createElement(View, { className: classNames(ComponentClassName.Grid, className), ref: ref, ...rest }, children));
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/grid)
 */
const Grid = primitiveWithForwardRef(GridPrimitive);
Grid.displayName = 'Grid';

export { Grid };
