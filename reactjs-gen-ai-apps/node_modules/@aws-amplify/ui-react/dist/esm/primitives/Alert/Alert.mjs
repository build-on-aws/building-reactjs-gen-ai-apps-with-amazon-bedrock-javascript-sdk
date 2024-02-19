import * as React from 'react';
import { isFunction, classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import { ComponentText } from '../shared/constants.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';
import { Flex } from '../Flex/Flex.mjs';
import { Button } from '../Button/Button.mjs';
import { AlertIcon } from './AlertIcon.mjs';
import '../Icon/Icon.mjs';
import '../Icon/context/IconsContext.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import { IconClose } from '../Icon/icons/IconClose.mjs';

const AlertPrimitive = ({ buttonRef, children, className, dismissButtonLabel = ComponentText.Alert.dismissButtonLabel, hasIcon = true, heading, isDismissible = false, onDismiss, variation, ...rest }, ref) => {
    const [dismissed, setDismissed] = React.useState(false);
    const icons = useIcons('alert');
    const dismissAlert = React.useCallback(() => {
        setDismissed(!dismissed);
        if (isFunction(onDismiss)) {
            onDismiss();
        }
    }, [setDismissed, onDismiss, dismissed]);
    return !dismissed ? (React.createElement(Flex, { className: classNames(ComponentClassName.Alert, className, classNameModifier(ComponentClassName.Alert, variation)), ref: ref, role: "alert", ...rest },
        hasIcon && React.createElement(AlertIcon, { variation: variation, ariaHidden: true }),
        React.createElement(View, { flex: "1" },
            heading && (React.createElement(View, { className: ComponentClassName.AlertHeading }, heading)),
            React.createElement(View, { className: ComponentClassName.AlertBody }, children)),
        isDismissible && (React.createElement(Button, { ariaLabel: dismissButtonLabel, variation: "link", className: ComponentClassName.AlertDismiss, onClick: dismissAlert, ref: buttonRef }, icons?.close ?? React.createElement(IconClose, { "aria-hidden": "true" }))))) : null;
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/alert)
 */
const Alert = primitiveWithForwardRef(AlertPrimitive);
Alert.displayName = 'Alert';

export { Alert };
