import QRCode from 'qrcode';
import * as React from 'react';
import { ConsoleLogger } from 'aws-amplify/utils';
import { authenticatorTextUtil, getTotpCodeURL } from '@aws-amplify/ui';
import { Flex } from '../../../primitives/Flex/Flex.mjs';
import { Heading } from '../../../primitives/Heading/Heading.mjs';
import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { useCustomComponents } from '../hooks/useCustomComponents/useCustomComponents.mjs';
import { useFormHandlers } from '../hooks/useFormHandlers/useFormHandlers.mjs';
import { ConfirmSignInFooter } from '../shared/ConfirmSignInFooter.mjs';
import { RemoteErrorMessage } from '../shared/RemoteErrorMessage.mjs';
import { FormFields } from '../shared/FormFields.mjs';
import { RouteContainer } from '../RouteContainer/RouteContainer.mjs';

const logger = new ConsoleLogger('SetupTotp-logger');
const { getSetupTotpText, getCopiedText, getLoadingText } = authenticatorTextUtil;
const SetupTotp = ({ className, variation, }) => {
    const { totpSecretCode, isPending, username, QRFields } = useAuthenticator((context) => [context.isPending, context.totpSecretCode, context.username]);
    const { handleChange, handleSubmit } = useFormHandlers();
    const { components: { 
    // @ts-ignore
    SetupTotp: { Header = SetupTotp.Header, Footer = SetupTotp.Footer }, }, } = useCustomComponents();
    const [isLoading, setIsLoading] = React.useState(true);
    const [qrCode, setQrCode] = React.useState();
    const [copyTextLabel, setCopyTextLabel] = React.useState('COPY');
    const { totpIssuer = 'AWSCognito', totpUsername = username } = QRFields ?? {};
    const generateQRCode = React.useCallback(async () => {
        try {
            const totpCode = getTotpCodeURL(totpIssuer, totpUsername, totpSecretCode);
            const qrCodeImageSource = await QRCode.toDataURL(totpCode);
            setQrCode(qrCodeImageSource);
        }
        catch (error) {
            logger.error(error);
        }
        finally {
            setIsLoading(false);
        }
    }, [totpIssuer, totpUsername, totpSecretCode]);
    React.useEffect(() => {
        if (!qrCode) {
            generateQRCode();
        }
    }, [generateQRCode, qrCode]);
    const copyText = () => {
        navigator.clipboard.writeText(totpSecretCode);
        setCopyTextLabel(getCopiedText());
    };
    return (React.createElement(RouteContainer, { className: className, variation: variation },
        React.createElement("form", { "data-amplify-form": "", "data-amplify-authenticator-setup-totp": "", method: "post", onChange: handleChange, onSubmit: handleSubmit },
            React.createElement(Flex, { as: "fieldset", direction: "column", isDisabled: isPending },
                React.createElement(Header, null),
                React.createElement(Flex, { direction: "column" },
                    isLoading ? (React.createElement("p", null,
                        getLoadingText(),
                        "\u2026")) : (React.createElement("img", { "data-amplify-qrcode": true, src: qrCode, alt: "qr code", width: "228", height: "228" })),
                    React.createElement(Flex, { "data-amplify-copy": true },
                        React.createElement("div", null, totpSecretCode),
                        React.createElement(Flex, { "data-amplify-copy-svg": true, onClick: copyText },
                            React.createElement("div", { "data-amplify-copy-tooltip": true }, copyTextLabel),
                            React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("path", { d: "M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z" })))),
                    React.createElement(FormFields, null),
                    React.createElement(RemoteErrorMessage, null)),
                React.createElement(ConfirmSignInFooter, null),
                React.createElement(Footer, null)))));
};
SetupTotp.Header = function Header() {
    return React.createElement(Heading, { level: 3 }, getSetupTotpText());
};
SetupTotp.Footer = function Footer() {
    // @ts-ignore
    return null;
};

export { SetupTotp };
