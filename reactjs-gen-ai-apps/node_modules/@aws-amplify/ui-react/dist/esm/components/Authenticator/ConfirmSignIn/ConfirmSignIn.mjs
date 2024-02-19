import React__default from 'react';
import { authenticatorTextUtil } from '@aws-amplify/ui';
import { Flex } from '../../../primitives/Flex/Flex.mjs';
import { Heading } from '../../../primitives/Heading/Heading.mjs';
import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { useCustomComponents } from '../hooks/useCustomComponents/useCustomComponents.mjs';
import { useFormHandlers } from '../hooks/useFormHandlers/useFormHandlers.mjs';
import { FormFields } from '../shared/FormFields.mjs';
import { ConfirmSignInFooter } from '../shared/ConfirmSignInFooter.mjs';
import { RemoteErrorMessage } from '../shared/RemoteErrorMessage.mjs';
import { RouteContainer } from '../RouteContainer/RouteContainer.mjs';

const { getChallengeText } = authenticatorTextUtil;
const ConfirmSignIn = ({ className, variation, }) => {
    const { isPending } = useAuthenticator((context) => [context.isPending]);
    const { handleChange, handleSubmit } = useFormHandlers();
    const { components: { 
    // @ts-ignore
    ConfirmSignIn: { Header = ConfirmSignIn.Header, Footer = ConfirmSignIn.Footer, }, }, } = useCustomComponents();
    return (React__default.createElement(RouteContainer, { className: className, variation: variation },
        React__default.createElement("form", { "data-amplify-form": "", "data-amplify-authenticator-confirmsignin": "", method: "post", onChange: handleChange, onSubmit: handleSubmit },
            React__default.createElement(Flex, { as: "fieldset", direction: "column", isDisabled: isPending },
                React__default.createElement(Header, null),
                React__default.createElement(Flex, { direction: "column" },
                    React__default.createElement(FormFields, null),
                    React__default.createElement(RemoteErrorMessage, null)),
                React__default.createElement(ConfirmSignInFooter, null),
                React__default.createElement(Footer, null)))));
};
function Header() {
    const { challengeName } = useAuthenticator(({ challengeName }) => [
        challengeName,
    ]);
    return React__default.createElement(Heading, { level: 3 }, getChallengeText(challengeName));
}
ConfirmSignIn.Header = Header;
ConfirmSignIn.Footer = function Footer() {
    // @ts-ignore
    return null;
};

export { ConfirmSignIn };
