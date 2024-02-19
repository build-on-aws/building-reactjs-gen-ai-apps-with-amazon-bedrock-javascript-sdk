import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { Flex } from '../Flex/Flex.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const MessageHeadingPrimitive = ({ children, className, ...rest }, ref) => {
    return (React.createElement(Flex, { className: classNames(ComponentClassName.MessageHeading, className), ref: ref, ...rest }, children));
};
const MessageHeading = primitiveWithForwardRef(MessageHeadingPrimitive);
MessageHeading.displayName = 'MessageHeading';

export { MessageHeading };
