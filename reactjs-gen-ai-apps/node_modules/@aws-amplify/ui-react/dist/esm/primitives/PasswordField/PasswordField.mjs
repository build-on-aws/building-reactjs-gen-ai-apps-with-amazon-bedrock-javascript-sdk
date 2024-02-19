import { classNames, ComponentClassName } from '@aws-amplify/ui';
import * as React from 'react';
import { ShowPasswordButton } from './ShowPasswordButton.mjs';
import { TextField } from '../TextField/TextField.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const PasswordFieldPrimitive = ({ autoComplete = 'current-password', label, className, hideShowPassword = false, passwordIsHiddenLabel, passwordIsShownLabel, showPasswordButtonLabel, showPasswordButtonRef, size, hasError, ...rest }, ref) => {
    const [type, setType] = React.useState('password');
    const showPasswordOnClick = React.useCallback(() => {
        if (type === 'password') {
            setType('text');
        }
        else {
            setType('password');
        }
    }, [setType, type]);
    return (React.createElement(TextField, { autoComplete: autoComplete, outerEndComponent: hideShowPassword ? null : (React.createElement(ShowPasswordButton, { fieldType: type, onClick: showPasswordOnClick, passwordIsHiddenLabel: passwordIsHiddenLabel, passwordIsShownLabel: passwordIsShownLabel, ref: showPasswordButtonRef, size: size, showPasswordButtonLabel: showPasswordButtonLabel, hasError: hasError })), size: size, type: type, label: label, className: classNames(ComponentClassName.PasswordField, className), ref: ref, hasError: hasError, ...rest }));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/passwordfield)
 */
const PasswordField = primitiveWithForwardRef(PasswordFieldPrimitive);
PasswordField.displayName = 'PasswordField';

export { PasswordField };
