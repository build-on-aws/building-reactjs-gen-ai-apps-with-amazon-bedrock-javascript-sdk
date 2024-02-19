import React__default from 'react';
import { Authenticator } from './Authenticator.mjs';

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/authenticator)
 */
function withAuthenticator(Component, options = {}) {
    const { variation = 'modal' } = options;
    return function WrappedWithAuthenticator(props) {
        return (React__default.createElement(Authenticator, { variation: variation, ...options }, (withAuthenticatorProps) => (React__default.createElement(Component, { ...props, ...withAuthenticatorProps }))));
    };
}

export { withAuthenticator };
