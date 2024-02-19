import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import { Flex } from '../Flex/Flex.mjs';
import { MessageContext } from './useMessage.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const MessageContainerPrimitive = ({ children, className, colorTheme = 'neutral', variation = 'filled', ...rest }, ref) => {
    const [dismissed, setDismissed] = React.useState(false);
    const value = React.useMemo(() => ({
        colorTheme,
        dismissed,
        setDismissed,
    }), [colorTheme, dismissed]);
    return (React.createElement(MessageContext.Provider, { value: value }, !dismissed ? (React.createElement(Flex, { className: classNames(ComponentClassName.Message, classNameModifier(ComponentClassName.Message, variation), classNameModifier(ComponentClassName.Message, colorTheme), className), ref: ref, ...rest }, children)) : null));
};
const MessageContainer = primitiveWithForwardRef(MessageContainerPrimitive);
MessageContainer.displayName = 'MessageContainer';

export { MessageContainer };
