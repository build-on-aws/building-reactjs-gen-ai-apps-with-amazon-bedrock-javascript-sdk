import React__default, { useContext, useMemo, useEffect } from 'react';
import { useInterpret } from '@xstate/react';
import { getCurrentUser } from 'aws-amplify/auth';
import { createAuthenticatorMachine, listenToAuthHub, defaultAuthHubHandler } from '@aws-amplify/ui';
import { AuthenticatorContext } from './AuthenticatorContext.mjs';

const createHubHandler = (options) => (data, service) => {
    defaultAuthHubHandler(data, service, options);
};
function AuthenticatorProvider({ children, }) {
    // `authStatus` is exposed by `useAuthenticator` but should not be derived directly from the
    // state machine as the machine only updates on `Authenticator` initiated events, which
    // leads to scenarios where the state machine `authStatus` gets "stuck". For exmample,
    // if a user was to sign in using `Auth.signIn` directly rather than using `Authenticator`
    const [authStatus, setAuthStatus] = React__default.useState('configuring');
    // only run on first render
    React__default.useEffect(() => {
        getCurrentUser()
            .then(() => {
            setAuthStatus('authenticated');
        })
            .catch(() => {
            setAuthStatus('unauthenticated');
        });
    }, []);
    /**
     * Based on use cases, developer might already have added another Provider
     * outside Authenticator. In that case, we sync the two providers by just
     * passing the parent value.
     *
     * TODO(BREAKING): enforce only one provider in App tree
     */
    const parentProviderVal = useContext(AuthenticatorContext);
    const service = useInterpret(createAuthenticatorMachine);
    const value = useMemo(() => (!parentProviderVal ? { authStatus, service } : parentProviderVal), [authStatus, parentProviderVal, service]);
    const { service: activeService } = value;
    useEffect(() => {
        const onSignIn = () => {
            setAuthStatus('authenticated');
        };
        const onSignOut = () => {
            setAuthStatus('unauthenticated');
        };
        const unsubscribe = listenToAuthHub(activeService, createHubHandler({ onSignIn, onSignOut }));
        return unsubscribe;
    }, [activeService]);
    return (React__default.createElement(AuthenticatorContext.Provider, { value: value }, children));
}

export { AuthenticatorProvider as default };
