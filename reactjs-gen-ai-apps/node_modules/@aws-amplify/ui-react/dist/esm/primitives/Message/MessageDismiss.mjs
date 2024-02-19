import * as React from 'react';
import { isFunction, classNames, ComponentClassName } from '@aws-amplify/ui';
import { Button } from '../Button/Button.mjs';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.mjs';
import '../View/View.mjs';
import { IconClose } from '../Icon/icons/IconClose.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import { ComponentText } from '../shared/constants.mjs';
import { useMessage } from './useMessage.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const MessageDismissPrimitive = ({ onDismiss, dismissLabel, hasIcon = true, children, className, ...rest }, ref) => {
    const { setDismissed } = useMessage();
    const icons = useIcons('message');
    const dismissMessage = React.useCallback(() => {
        setDismissed(true);
        if (isFunction(onDismiss)) {
            onDismiss();
        }
    }, [setDismissed, onDismiss]);
    return (React.createElement(Button, { variation: "link", colorTheme: "overlay", className: classNames(ComponentClassName.MessageDismiss, className), ref: ref, onClick: dismissMessage, ...rest },
        hasIcon ? icons?.close ?? React.createElement(IconClose, { "aria-hidden": "true" }) : null,
        children ? (children) : (React.createElement(VisuallyHidden, null, dismissLabel ? dismissLabel : ComponentText.Message.dismissLabel))));
};
const MessageDismiss = primitiveWithForwardRef(MessageDismissPrimitive);
MessageDismiss.displayName = 'MessageContent';

export { MessageDismiss };
