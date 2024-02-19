import React__default from 'react';
import { FederatedIdentityProviders, authenticatorTextUtil } from '@aws-amplify/ui';
import { Divider } from '../../../primitives/Divider/Divider.mjs';
import { Flex } from '../../../primitives/Flex/Flex.mjs';
import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { FederatedSignInButton } from './FederatedSignInButtons/FederatedSignInButton.mjs';

const { getSignInWithFederationText, getOrText } = authenticatorTextUtil;
function FederatedSignIn() {
    const { route, socialProviders } = useAuthenticator(({ route, socialProviders }) => [route, socialProviders]);
    if (socialProviders.length === 0) {
        // @ts-ignore
        return null;
    }
    return (React__default.createElement(Flex, { direction: "column", padding: `0 0 1rem 0`, className: "federated-sign-in-container" },
        socialProviders.map((provider) => {
            switch (provider) {
                case 'amazon':
                    return (React__default.createElement(FederatedSignInButton, { icon: "amazon", key: provider, provider: FederatedIdentityProviders.Amazon, text: getSignInWithFederationText(route, provider) }));
                case 'apple':
                    return (React__default.createElement(FederatedSignInButton, { icon: "apple", key: provider, provider: FederatedIdentityProviders.Apple, text: getSignInWithFederationText(route, provider) }));
                case 'facebook':
                    return (React__default.createElement(FederatedSignInButton, { icon: "facebook", key: provider, provider: FederatedIdentityProviders.Facebook, text: getSignInWithFederationText(route, provider) }));
                case 'google':
                    return (React__default.createElement(FederatedSignInButton, { icon: "google", key: provider, provider: FederatedIdentityProviders.Google, text: getSignInWithFederationText(route, provider) }));
                default:
                    // eslint-disable-next-line no-console
                    console.error(`Authenticator does not support ${provider}. Please open an issue: https://github.com/aws-amplify/amplify-ui/issues/choose`);
            }
        }),
        React__default.createElement(Divider, { size: "small", label: getOrText() })));
}

export { FederatedSignIn };
