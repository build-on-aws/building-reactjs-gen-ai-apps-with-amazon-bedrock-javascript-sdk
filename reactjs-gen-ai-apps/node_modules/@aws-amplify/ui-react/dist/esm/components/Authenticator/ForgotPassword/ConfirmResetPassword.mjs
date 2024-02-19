import React__default from 'react';
import { authenticatorTextUtil } from '@aws-amplify/ui';
import { Flex } from '../../../primitives/Flex/Flex.mjs';
import { Heading } from '../../../primitives/Heading/Heading.mjs';
import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { useCustomComponents } from '../hooks/useCustomComponents/useCustomComponents.mjs';
import { useFormHandlers } from '../hooks/useFormHandlers/useFormHandlers.mjs';
import { RemoteErrorMessage } from '../shared/RemoteErrorMessage.mjs';
import { TwoButtonSubmitFooter } from '../shared/TwoButtonSubmitFooter.mjs';
import { FormFields } from '../shared/FormFields.mjs';
import { RouteContainer } from '../RouteContainer/RouteContainer.mjs';

const { getResendCodeText, getResetYourPasswordText } = authenticatorTextUtil;
const ConfirmResetPassword = ({ className, variation, }) => {
    const { isPending } = useAuthenticator((context) => [context.isPending]);
    const { handleBlur, handleChange, handleSubmit } = useFormHandlers();
    const { components: { 
    // @ts-ignore
    ConfirmResetPassword: { Header = ConfirmResetPassword.Header, Footer = ConfirmResetPassword.Footer, }, }, } = useCustomComponents();
    return (React__default.createElement(RouteContainer, { className: className, variation: variation },
        React__default.createElement("form", { "data-amplify-form": "", "data-amplify-authenticator-confirmresetpassword": "", method: "post", onSubmit: handleSubmit, onChange: handleChange, onBlur: handleBlur },
            React__default.createElement(Flex, { as: "fieldset", direction: "column", isDisabled: isPending },
                React__default.createElement(Header, null),
                React__default.createElement(Flex, { direction: "column" },
                    React__default.createElement(FormFields, null)),
                React__default.createElement(RemoteErrorMessage, null),
                React__default.createElement(TwoButtonSubmitFooter, { cancelButtonSendType: "RESEND", cancelButtonText: getResendCodeText() }),
                React__default.createElement(Footer, null)))));
};
ConfirmResetPassword.Header = function Header() {
    const headerText = getResetYourPasswordText();
    return React__default.createElement(Heading, { level: 3 }, headerText);
};
ConfirmResetPassword.Footer = function Footer() {
    // @ts-ignore
    return null;
};

export { ConfirmResetPassword };
