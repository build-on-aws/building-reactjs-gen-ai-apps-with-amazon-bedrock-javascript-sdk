import * as React from 'react';
import { useStyles } from '../shared/styleUtils.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const ViewPrimitive = ({ as = 'div', children, testId, ariaLabel, isDisabled, style, inert, ...rest }, ref) => {
    const { propStyles, nonStyleProps } = useStyles(rest, style);
    return React.createElement(as, {
        'aria-label': ariaLabel,
        'data-testid': testId,
        disabled: isDisabled,
        ref,
        inert: inert ? '' : null,
        style: propStyles,
        ...nonStyleProps,
    }, children);
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/view)
 */
const View = primitiveWithForwardRef(ViewPrimitive);
View.displayName = 'View';

export { View };
