import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { useMessage } from './useMessage.mjs';
import { IconCheckCircle } from '../Icon/icons/IconCheckCircle.mjs';
import { IconError } from '../Icon/icons/IconError.mjs';
import { IconInfo } from '../Icon/icons/IconInfo.mjs';
import { IconWarning } from '../Icon/icons/IconWarning.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const MessageIconPrimitive = ({ className, ...rest }, ref) => {
    const icons = useIcons('message');
    const { colorTheme } = useMessage();
    let icon;
    switch (colorTheme) {
        case 'info':
            icon = icons?.info ?? React.createElement(IconInfo, null);
            break;
        case 'error':
            icon = icons?.error ?? React.createElement(IconError, null);
            break;
        case 'warning':
            icon = icons?.warning ?? React.createElement(IconWarning, null);
            break;
        case 'success':
            icon = icons?.success ?? React.createElement(IconCheckCircle, null);
            break;
    }
    return icon ? (React.createElement(View, { className: classNames(ComponentClassName.MessageIcon, className), "aria-hidden": "true", ref: ref, ...rest }, icon)) : null;
};
const MessageIcon = primitiveWithForwardRef(MessageIconPrimitive);
MessageIcon.displayName = 'MessageIcon';

export { MessageIcon };
