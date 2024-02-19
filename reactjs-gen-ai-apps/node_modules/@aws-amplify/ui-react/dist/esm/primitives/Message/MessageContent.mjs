import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { Flex } from '../Flex/Flex.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const MessageContentPrimitive = ({ children, className, ...rest }, ref) => {
    return (React.createElement(Flex, { className: classNames(ComponentClassName.MessageContent, className), ref: ref, ...rest }, children));
};
const MessageContent = primitiveWithForwardRef(MessageContentPrimitive);
MessageContent.displayName = 'MessageContent';

export { MessageContent };
