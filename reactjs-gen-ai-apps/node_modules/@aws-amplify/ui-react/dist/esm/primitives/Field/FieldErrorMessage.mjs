import * as React from 'react';
import { Text } from '../Text/Text.mjs';
import { ComponentClassName } from '@aws-amplify/ui';

const FieldErrorMessage = ({ errorMessage, hasError, ...rest }) => {
    return hasError && errorMessage ? (React.createElement(Text, { className: ComponentClassName.FieldErrorMessage, ...rest }, errorMessage)) : null;
};
FieldErrorMessage.displayName = 'FieldErrorMessage';

export { FieldErrorMessage };
