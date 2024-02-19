import * as React from 'react';

/**
 * Updates the return type for primitives wrapped in `React.forwardRef` to
 * `React.ReactElement`. In React 18 the return type of `React.ExoticComponent`
 * was changed from `React.ReactElement` to `React.ReactNode`, which breaks
 * clients using React 16 and 17.
 *
 * @param primitive UI Primitive to be wrapped with `React.forwardRef`
 * @returns ForwaredRef wrapped UI Primitive
 */
const primitiveWithForwardRef = (primitive) => React.forwardRef(primitive);

export { primitiveWithForwardRef };
