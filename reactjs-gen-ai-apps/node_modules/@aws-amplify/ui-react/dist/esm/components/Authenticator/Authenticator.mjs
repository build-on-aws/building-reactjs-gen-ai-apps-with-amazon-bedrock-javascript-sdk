import * as React from 'react';
import { isFunction } from '@aws-amplify/ui';
import { useSetUserAgent, AuthenticatorProvider, useAuthenticator, useAuthenticatorInitMachine } from '@aws-amplify/ui-react-core';
import { VERSION } from '../../version.mjs';
import { useDeprecationWarning } from '../../hooks/useDeprecationWarning.mjs';
import { CustomComponentsContext } from './hooks/useCustomComponents/useCustomComponents.mjs';
import '../../primitives/View/View.mjs';
import { Router } from './Router/Router.mjs';
import { SetupTotp } from './SetupTotp/SetupTotp.mjs';
import { SignIn } from './SignIn/SignIn.mjs';
import { SignUp } from './SignUp/SignUp.mjs';
import { ForceNewPassword } from './ForceNewPassword/ForceNewPassword.mjs';
import './ForgotPassword/ConfirmResetPassword.mjs';
import { ForgotPassword } from './ForgotPassword/ForgotPassword.mjs';
import { defaultComponents } from './hooks/useCustomComponents/defaultComponents.mjs';

// `AuthenticatorInternal` exists to give access to the context returned via `useAuthenticator`,
// which allows the `Authenticator` to just return `children` if a user is authenticated.
// Once the `Provider` is removed from the `Authenticator` component and exported as
// `AuthenticatorProvider`, this component should be renamed to `Authenticator`.
function AuthenticatorInternal({ children, className, components: customComponents, formFields, hideSignUp, initialState, loginMechanisms, passwordSettings, signUpAttributes, services, socialProviders, variation, }) {
    useDeprecationWarning({
        message: 'The `passwordSettings` prop has been deprecated and will be removed in a future major version of Amplify UI.',
        // shouldWarn: !!passwordSettings,
        /**
         * @migration turn off until getConfig returns zero config
         */
        shouldWarn: false,
    });
    const { route, signOut, user } = useAuthenticator(({ route, signOut, user }) => [route, signOut, user]);
    useAuthenticatorInitMachine({
        initialState,
        loginMechanisms,
        passwordSettings,
        services,
        signUpAttributes,
        socialProviders,
        formFields,
    });
    const value = React.useMemo(() => ({ components: { ...defaultComponents, ...customComponents } }), [customComponents]);
    const isAuthenticatedRoute = route === 'authenticated' || route === 'signOut';
    if (isAuthenticatedRoute) {
        // `Authenticator` might not have user defined `children` for non SPA use cases.
        if (!children) {
            // @ts-ignore
            return null;
        }
        return (React.createElement(React.Fragment, null, isFunction(children)
            ? children({ signOut, user }) // children is a render prop
            : children));
    }
    return (React.createElement(CustomComponentsContext.Provider, { value: value },
        React.createElement(Router, { className: className, hideSignUp: hideSignUp, variation: variation })));
}
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/authenticator)
 */
function Authenticator(props) {
    useSetUserAgent({
        componentName: 'Authenticator',
        packageName: 'react',
        version: VERSION,
    });
    return (React.createElement(AuthenticatorProvider, null,
        React.createElement(AuthenticatorInternal, { ...props })));
}
Authenticator.Provider = AuthenticatorProvider;
Authenticator.ForgotPassword = ForgotPassword;
Authenticator.SetupTotp = SetupTotp;
Authenticator.SignIn = SignIn;
Authenticator.SignUp = SignUp;
Authenticator.ForceNewPassword = ForceNewPassword;

export { Authenticator, AuthenticatorInternal };
