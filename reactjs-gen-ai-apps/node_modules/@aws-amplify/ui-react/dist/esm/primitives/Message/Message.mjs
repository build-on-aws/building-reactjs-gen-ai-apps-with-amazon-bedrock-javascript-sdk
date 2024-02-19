import * as React from 'react';
import { MessageHeading } from './MessageHeading.mjs';
import { MessageIcon } from './MessageIcon.mjs';
import { MessageDismiss } from './MessageDismiss.mjs';
import { MessageContent } from './MessageContent.mjs';
import { MessageContainer } from './MessageContainer.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const MessagePrimitive = ({ children, heading, dismissLabel, isDismissible, onDismiss, hasIcon = true, colorTheme = 'neutral', variation = 'filled', ...rest }, ref) => {
    return (React.createElement(MessageContainer, { colorTheme: colorTheme, variation: variation, ref: ref, ...rest },
        hasIcon ? React.createElement(MessageIcon, null) : null,
        React.createElement(MessageContent, null,
            heading ? React.createElement(MessageHeading, null, heading) : null,
            children),
        isDismissible ? (React.createElement(MessageDismiss, { onDismiss: onDismiss, dismissLabel: dismissLabel })) : null));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/message)
 */
const Message = primitiveWithForwardRef(MessagePrimitive);
Message.displayName = 'Message';

export { Message };
