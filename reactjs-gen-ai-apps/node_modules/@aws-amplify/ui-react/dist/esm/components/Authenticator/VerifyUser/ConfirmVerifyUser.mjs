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

const { getAccountRecoveryInfoText, getSkipText } = authenticatorTextUtil;
const ConfirmVerifyUser = ({ className, variation, }) => {
    const { isPending } = useAuthenticator((context) => [context.isPending]);
    const { handleChange, handleSubmit } = useFormHandlers();
    const { components: { 
    // @ts-ignore
    ConfirmVerifyUser: { Header = ConfirmVerifyUser.Header, Footer = ConfirmVerifyUser.Footer, }, }, } = useCustomComponents();
    return (React__default.createElement(RouteContainer, { className: className, variation: variation },
        React__default.createElement("form", { "data-amplify-form": "", "data-amplify-authenticator-confirmverifyuser": "", method: "post", onChange: handleChange, onSubmit: handleSubmit },
            React__default.createElement(Flex, { as: "fieldset", direction: "column", isDisabled: isPending },
                React__default.createElement(Header, null),
                React__default.createElement(Flex, { direction: "column" },
                    React__default.createElement(FormFields, null)),
                React__default.createElement(RemoteErrorMessage, null),
                React__default.createElement(TwoButtonSubmitFooter, { cancelButtonText: getSkipText(), cancelButtonSendType: "SKIP" }),
                React__default.createElement(Footer, null)))));
};
ConfirmVerifyUser.Header = function Header() {
    return React__default.createElement(Heading, { level: 3 }, getAccountRecoveryInfoText());
};
ConfirmVerifyUser.Footer = function Footer() {
    return null;
};

export { ConfirmVerifyUser };
