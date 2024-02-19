import * as React from 'react';
import { classNames, ComponentClassName, classNameModifierByFlag } from '@aws-amplify/ui';
import { Button } from '../Button/Button.mjs';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.mjs';
import { ComponentText } from '../shared/constants.mjs';
import '../Icon/Icon.mjs';
import '../Icon/context/IconsContext.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import '../View/View.mjs';
import { IconVisibilityOff } from '../Icon/icons/IconVisibilityOff.mjs';
import { IconVisibility } from '../Icon/icons/IconVisibility.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const { passwordIsHidden, passwordIsShown, showPassword } = ComponentText.PasswordField;
const ShowPasswordButtonPrimitive = ({ fieldType, passwordIsHiddenLabel = passwordIsHidden, passwordIsShownLabel = passwordIsShown, showPasswordButtonLabel = showPassword, size, hasError, ...rest }, ref) => {
    const icons = useIcons('passwordField');
    const showPasswordButtonClass = classNames(ComponentClassName.FieldShowPassword, classNameModifierByFlag(ComponentClassName.FieldShowPassword, 'error', hasError));
    const icon = fieldType === 'password'
        ? icons?.visibility ?? React.createElement(IconVisibility, { "aria-hidden": "true" })
        : icons?.visibilityOff ?? React.createElement(IconVisibilityOff, { "aria-hidden": "true" });
    return (React.createElement(Button, { "aria-checked": fieldType !== 'password', ariaLabel: showPasswordButtonLabel, className: showPasswordButtonClass, colorTheme: hasError ? 'error' : undefined, ref: ref, role: "switch", size: size, ...rest },
        React.createElement(VisuallyHidden, { "aria-live": "polite" }, fieldType === 'password'
            ? passwordIsHiddenLabel
            : passwordIsShownLabel),
        icon));
};
const ShowPasswordButton = primitiveWithForwardRef(ShowPasswordButtonPrimitive);
ShowPasswordButton.displayName = 'ShowPasswordButton';

export { ShowPasswordButton };
