import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const ImagePrimitive = ({ className, ...rest }, ref) => (React.createElement(View, { as: "img", ref: ref, className: classNames(ComponentClassName.Image, className), ...rest }));
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/image)
 */
const Image = primitiveWithForwardRef(ImagePrimitive);
Image.displayName = 'Image';

export { Image };
